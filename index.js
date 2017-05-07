'use strict';
const { json, send } = require('micro');
const { sendMail } = require('./mail');

module.exports = async (req, res) => {
	const body = await json(req);
	sendMail(body);
	send(res, 201, { success: true });
}
