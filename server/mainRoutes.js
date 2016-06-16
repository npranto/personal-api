const middleware = require('./controllers/middleware.js')

module.exports = (app) => {
	middleware(app);
}