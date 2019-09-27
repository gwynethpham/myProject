module.exports = (app) => {
	app.use('/users', require('./containers/users/controller'));
}