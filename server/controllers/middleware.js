const mainCtrl = require('./mainCtrl.js')

module.exports = (app) => {
	const username = "shakib"
	const password = "12345"

	let verifyUser = (req, res, next) => {
		if (req.params.username === username && req.params.pin === password) {
			next();
		}else{
			return res.status(404).json("Username & password is not correct");
		}
	}

	app.get('/secrets/:username/:pin', verifyUser, mainCtrl.giveSecret);
	app.get('/name', mainCtrl.getName);
	app.get('/location', mainCtrl.getLocation);
	app.get('/occupations', mainCtrl.getOccupations);
	app.get('/occupations/latest', mainCtrl.getLatestOccupation);
	app.get('/hobbies', mainCtrl.getHobbies);
	app.get('/hobbies/:type', mainCtrl.getHobbiesByType);
	app.get('/occupations/sorted', mainCtrl.occupationSorted);
	app.post('/name', mainCtrl.postName);
	app.post('/location', mainCtrl.postLocation);
	app.post('/hobbies', mainCtrl.postHobbies);
	app.post('/occupations', mainCtrl.postOccupations);
	app.get('/skillz', mainCtrl.getSkillz);
	app.get('/skillz/sorted', mainCtrl.skillsByExperience);
	app.post('/skillz',  mainCtrl.generateId, mainCtrl.postSkillz);

}