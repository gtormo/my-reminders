import { SendEmailOptions } from '../models/email';
import { TransactionalEmailsApi, SendSmtpEmail, TransactionalEmailsApiApiKeys } from 'sib-api-v3-typescript'

const send = async (props: SendEmailOptions): Promise<any> => {
    const apiInstance = new TransactionalEmailsApi();
    const sendSmtpEmail = new SendSmtpEmail();
    const { subject, emailTo, emailFrom, html } = props

    apiInstance.setApiKey(TransactionalEmailsApiApiKeys.apiKey, process.env.API_KEY_SENDINBLUE || '')

    sendSmtpEmail.subject = subject;
    sendSmtpEmail.htmlContent = html;
    sendSmtpEmail.sender = emailFrom;
    sendSmtpEmail.to = emailTo;

    return apiInstance.sendTransacEmail(sendSmtpEmail)
}

export const EmailService = {
    send
}