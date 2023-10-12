import nodemailer from 'nodemailer';
import { render } from '@react-email/render';
import { Email } from '../components/Email';

async function sendWelcomeEmail(email) {
    try {
        // create trasport
        const transporter = nodemailer.createTransport({
            host: 'smtp.office365.com',
            port: 587,
            secure: false,
            auth: {
                user: process.env.SUBSCRIBE_MAIL,
                pass: process.env.SUBSCRIBE_PASS
            },
            tls: {
                rejectUnauthorized: false
            }
         });

         //email template
         const emailHtml = render(<Email url="https://jsentuidioma.com" />)
        // options obj
        const mailOptions = {
            from: process.env.SUBSCRIBE_MAIL,
            to: email,
            subject: 'Suscripción al boletín',
            html: emailHtml
        }

        // send email
        await transporter.sendMail(mailOptions);
    } catch (err) {
        throw err;
    }
}

export default sendWelcomeEmail;