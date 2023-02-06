const nodeMailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');
const sgMail = require('@sendgrid/mail');

const sendEmail = async (options) => {
  const transporter = nodeMailer.createTransport(
    sendgridTransport({
      auth: {
        api_key:
          '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',
      },
    })
  );

  const mailOptions = {
    from: process.env.SMPT_MAIL,
    to: options.email,
    subject: options.subject,
    text: options.message,
    html: options.message,
  };

  await transporter.sendMail(mailOptions);
};
module.exports = sendEmail;

////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const API_KEY =
//   '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';

// sgMail.setApiKey(API_KEY);

// const options = {
//   to: 'viveklimbachiya999@gmail.com',
//   from: 'viveklimbachiya999@gmail.com',
//   subject: 'Sub',
//   text: 'Temp msg',
// };

// console.log(options);

// // const sgMail = require('@sendgrid/mail');
// // sgMail.setApiKey(process.env.SENDGRID_API_KEY);
// const msg = {
//   to: 'test@example.com',
//   from: 'test@example.com', // Use the email address or domain you verified above
//   subject: 'Sending with Twilio SendGrid is Fun',
//   text: 'and easy to do anywhere, even with Node.js',
//   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
// };
// //ES6
// sgMail.send(options).then(
//   () => {},
//   (error) => {
//     console.error(error);

//     if (error.response) {
//       console.error(error.response.body);
//     }
//   }
// );
// //ES8
// const sendEmail = async () => {
//   try {
//     await sgMail.send(options);
//   } catch (error) {
//     console.error(error);

//     if (error.response) {
//       console.error(error.response.body);
//     }
//   }
// };
// const mailRes = await sendEmail(options);

// const sendEmail = async (options) => {
//   sgMail
//     .send(options)
//     .then((response) => console.log('Email sent..'))
//     .catch((error) => console.log(error.message));
// };

// module.exports = sendEmail;

//////////////////////////////////////////////////////////////////////////////////////////////////////

// const API_KEY =
//   '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';

// sgMail.setApiKey(API_KEY);

// const message = {
//   to: '190305105158@paruluniversity.ac.in',
//   from: 'viveklimbachiya999@gmail.com',
//   subject: 'hello mah boii',
//   text: 'hello mah boii',
//   html: '<h1>hhello from sendgrid</h1>',
// };

// sgMail
//   .send(message)
//   .then((response) => console.log('Email sent..'))
//   .catch((error) => console.log(error.message));

// sgMail.setApiKey(process.env.SENDGRID_API_KEY);

//////////////////////////////////////////////////////////////////////////////////////////////

// const sendEmail = async (options) => {
//   const transporter = nodeMailer.createTransport({
//     service: process.env.SMPT_SERVICE,
//     auth: {
//       user: process.env.SMPT_MAIL,
//       pass: process.env.SENDGRID_API_KEY,
//     },
//   });

//   const mailOptions = {
//     from: process.env.SMPT_MAIL,
//     to: options.email,
//     subject: options.subject,
//     text: options.message,
//   };

//   await transporter.sendMail(mailOptions);
// };

// module.exports = sendEmail;
