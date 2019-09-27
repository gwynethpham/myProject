const dotenv = require('dotenv');
dotenv.config();
const environment = {
    development: {
        secret: 'THIS IS USED TO SIGN AND VERIFY BLOOD LAND JWT TOKENS, REPLACE IT WITH YOUR OWN SECRET, IT CAN BE ANY STRING. AAA!',
        clientHost: 'http://localhost:3005/',
        devPlace: 'localhost',
        connectHost: 'mongodb://localhost/my-db'
    }
};

// console.log('environment[process.env.NODE_ENV]', environment[process.env.NODE_ENV]);
module.exports = {
    ...(environment[process.env.NODE_ENV])
};