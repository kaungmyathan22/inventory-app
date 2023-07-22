import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'localhost',
  port: 1025,
  ignoreTLS: true,
});

interface ISendEmailPayload {
  from: string;
  to: string;
  subject: string;
  text: string;
}

class EmailService {
  public static sendEmail(payload: ISendEmailPayload) {
    return transporter.sendMail(payload, (err, info) => {
      if (err) {
        console.error('Error sending email:', err);
      } else {
        console.log('Email sent successfully:', info.response);
      }
    });
  }
}

export default EmailService;
