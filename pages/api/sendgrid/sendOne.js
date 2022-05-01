// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default function handler(req, res) {
  console.log(req.body);
  sendEmail()
    .then(() => {
      res.status(200).json({
        success: true,
        message: "Email Sent!",
      });
    })
    .catch((error) => {
      res.status(500).json({
        success: true,
        message: error,
      });
    });
}

function sendEmail(options = {}) {
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

  return sgMail.send(msg);
}
