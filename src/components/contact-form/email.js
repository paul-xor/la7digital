const nodemailer = require("nodemailer");
const xoauth2 = require("xoauth2");

const sendEmail = async options => {
  // 1) Create a transporter
  const output = `
    <p>You have a new contact request.</p>
    <h3>Contact Details:</h3>
    <ul>
      <li>name: Some Name</li>
      <li>company: Some Company</li>
      <li>email: some@email.com</li>
      <li>phone: # 204-555-5555</li>
    </ul>
    <h3>Message:</h3>
    <p>Hey, how are you! </p>
  `;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      xoauth2: xoauth.createXOAuth2Generator({
        user: "nodemailer@gmail.com",
        clientID: process.env.REACT_APP_GOOGLE_clientID,
        clientSecret: process.env.REACT_APP_GOOGLE_clientSecret,
        refreshToken: process.env.REACT_APP_GOOGLE_refreshToken
      })
    }
  });

  // 2) Define the email options
  const mailOptions = {
    from: "Nodemailer Contact",
    to: "Pasha <pasha.a.smolov@gmail.com>",
    subject: `LA7digital Contact Request `,
    // text: options.message
    html: output //html body
  };

  // 3) Actually send the email
  await transporter.sendMail(mailOptions, function(err, data) {
    if (err) {
      console.log(err);
    } else {
      console.log("Message sent: %s", data.messageId);
      res.render("contact", { msg: "Email has been sent" });
    }
  });
};

module.exports = sendEmail;
