import 'dotenv/config'
import { EmailService } from './services/email.service'
import { WheaterService } from './services/wheater.service'
import { WheaterTemplateProps } from './models/wheater'
import { WheaterResumeTemplate } from './templates/wheater-resume.template'

(async () => {
  const wheater = await WheaterService.search()
  let wheaterTemplateProps: WheaterTemplateProps

  for (let index = 0; index < wheater.daily.time.length; index++) {
    const day = wheater.daily.time[index];
    
    if (day === new Date().toISOString().slice(0, 10)) {
      wheaterTemplateProps = {
        date: day,
        name: process.env.MAIL_TO_NAME,
        maxTemperature: wheater.daily.temperature_2m_max[index],
        minTemperature: wheater.daily.temperature_2m_min[index],
        maxWindSpeed: wheater.daily.windspeed_10m_max[index]
      } as WheaterTemplateProps
      break
    }
  }

  EmailService.send({
    subject: 'Tu resumen diario del tiempo',
    emailFrom: {
      email: process.env.MAIL_FROM_EMAIL,
      name: process.env.MAIL_FROM_NAME
    },
    emailTo: [{
      email: process.env.MAIL_TO_EMAIL,
      name: process.env.MAIL_TO_NAME
    }],
    html: WheaterResumeTemplate.getHTML(wheaterTemplateProps)
  })
})()