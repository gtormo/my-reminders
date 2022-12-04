interface EmailInfo {
    email: string
    name: string
}

export interface SendEmailOptions {
    subject: string
    emailFrom: EmailInfo
    emailTo: EmailInfo[]
    html: string
}