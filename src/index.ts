import 'dotenv/config'

import { EmailService } from './services/email.service'

EmailService.send({
  subject: 'El Tiempo para hoy',
  emailFrom: {
    email: process.env.MAIL_FROM_EMAIL,
    name: process.env.MAIL_FROM_NAME
  },
  emailTo: [{
    email: process.env.MAIL_TO_EMAIL,
    name: process.env.MAIL_TO_NAME
  }],
  html: `
    <div>
      <h2>Hola ${process.env.MAIL_TO_NAME}<h2>
      <h3>La previsión de tiempo para hoy ${new Date().toISOString().slice(0, 10)} es</h3>
      <p>Temperaturas<p>
    </div>
  `
})