'use strict';
const nodemailer = require('nodemailer');

// create reusable transporter object
let transporter = nodemailer.createTransport({ streamTransport: true });

function sendMail(body) {
	// setup email data with unicode symbols
	let mailOptions = {
		from: '"woot woot 👻" <sam@wootwoot.com>', // sender address
		to: 'wee@wootwoot.com, woot@wootwoot.com', // list of receivers
		subject: 'Got this in body ✔', // Subject line
		text: `${JSON.stringify(body)}`, // plain text body
		html: '<b>Hello world ?</b>' // html body
	};

	// send mail with defined transport object
	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			return console.log(error);
		}
		console.log('Message %s sent: %s', info.messageId);
	});
}

module.exports = { sendMail };
