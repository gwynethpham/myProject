const mongoose = require('mongoose');
const config = require('../db/config');
const {connectHost} = config;

// let mongoConfig = {
// 	useNewUrlParser : true,
// 	useCreateIndex : true
// }
module.exports = {
	newProjectDB : mongoose.connect(connectHost,{ useNewUrlParser: true, useCreateIndex : true})
};