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
  } = options;

  const msg = {
    to, // Change to your recipient
    from, // Change to your verified sender
    templateId: 'd-2e177966c18649e2b57d031341b2f77c',
      dynamic_template_data: {
        name: "Jeff",
        receipt_id: "12345",
        amount: 149,
        total: 149,
        date: '12/20/2020',
        description: "Some content here"
      },
  };

  return sgMail.send(msg);
}
