const {newProjectDB} = require('./../db/index');
const { connectHost } = require('./config');
const dotenv = require('dotenv');
dotenv.config();

connectDB(newProjectDB, connectHost);

function connectDB(db, connectUrl) {
    console.log('connectDB');
    console.log('newProjectDB',newProjectDB)
    // When successfully connected
    db.on('connected', function () {

        console.log('connection open to ' + connectUrl);
    });

    // If the connection throws an error
    db.on('error', function (err) {
        console.log('connection error: ' + err);
    });

    // When the connection is disconnected
    db.on('disconnected', function () {
        console.log('connection disconnected');
    });

    // If the Node process ends, close the DB connection
    process.on('SIGINT', function () {
        db.close(function () {
            console.log('connection disconnected through app termination');
            process.exit(0);
        });
    });

    db.Promise = global.Promise;
}
module.exports = {
	//===========================================================My DB=========================================================================
	User: newProjectDB.model('User', require('../containers/users/model'))
}