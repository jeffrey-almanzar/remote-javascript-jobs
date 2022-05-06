// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require("@sendgrid/mail");

export default function sendEmail(options = {}) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const {
    to = "almanzarortizjeffrey@gmail.com",
    from = "support@remotejavascriptjobs.io",
    subject = "Sending with SendGrid is Fun",
    text = "and easy to do anywhere, even with Node.js",
    html = "<strong>and easy to do anywhere, even with Node.js</strong>",
  } = options;

  const msg = {
    to, // Change to your recipient
    from, // Change to your verified sender
    subject,
    text,
    html,
  };

  return sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.error(error);
    });
}
