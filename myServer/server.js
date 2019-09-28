require('rootpath')();
const express = require('express');
const app = express();
var path = require('path');

const http = require('http');
const server = http.createServer(app);

const cors = require('cors');
const bodyParser = require('body-parser');

const config = require('./db/config');
const dotenv = require('dotenv');
dotenv.config();
// const jwt = require('helpers/jwt');
const errorHandler = require('helpers/error-handler');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// app.use(jwt());
require('./routes')(app);
// app.use('/users', require('./containers/users/controller'));

app.use(errorHandler);
console.log('process.env.NODE_ENV ', process.env.NODE_ENV);

const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 4000;

server.listen(port, function () {
    console.log('Server listening on port ' + port);
});

