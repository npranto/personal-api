let name = "Nazmuz Shakib Pranto";
let location = "Boston";
let occupations = ["Customer Service", "Public Affairs Assistant", "Infrastructure Coordinator Intern"];
let hobbies = [
	{
    	"name": "Watching cartoons",
    	"type": "current"
    },
    {
    	"name": "Quacking",
    	"type": "past"
    }
   ];
let skills = [
	{
		"id": 1,
  		"name": "Javascript",
  		"experience": "Intermediate"
	},
	{
		"id": 2,
  		"name": "HTML/CSS",
  		"experience": "Intermediate"
	},
	{
		"id": 3,
  		"name": "Node",
  		"experience": "Beginner"
	}
]
let secret = "I don't have any!" 








module.exports = {

	getName(req, res, next) {
		res.status(200).json({name});
	},
	getLocation(req, res, next) {
		res.status(200).json({location});
	},
	getOccupations(req, res, next) {
		res.status(200).json({occupations})
	},
	getLatestOccupation(req, res, next){
		let latestOccupation = occupations[occupations.length-1];
		res.status(200).json({latestOccupation});
	},
	getHobbies(req, res, next){
		res.status(200).json({hobbies});
	},
	getHobbiesByType(req, res, next){
		let hobbiesByType = [];
		for (var i = 0; i < hobbies.length; i++) {
			if (hobbies[i].type === req.params.type) {
				hobbiesByType.push(hobbies[i]);
			}
		}
		res.status(200).json({hobbiesByType});
	},
	occupationSorted(req, res, next){
		let occupationSorted = occupations;
		if (req.query.order === "asc"){
			occupationSorted = occupationSorted.sort();
		}else if(req.query.order === "desc"){
			occupationSorted = occupationSorted.sort().reverse();
		}
		return res.status(200).json({occupationSorted});
	},
	postName(req, res, next){
		name = req.body;
		res.status(201).json(name);
	},
	postLocation(req, res, next){
		location = req.body;
		res.status(201).json(location);
	},
	postHobbies(req, res, next){
		hobbies.push(req.body);
		res.status(201).json({hobbies});
	},
	postOccupations(req, res, next){
		occupations.push(req.body.occupation);
		res.status(201).send({occupations});
	},
	getSkillz(req, res, next){
		res.status(200).json({skills})
	},
	skillsByExperience(req, res, next){
		let skillsByExperience = [];
		for (let i = 0; i < skills.length; i++) {
			if (skills[i].experience.toLowerCase() === req.query.experience.toLowerCase()) {
				skillsByExperience.push(skills[i]);
			}
		}
		res.status(200).json({skillsByExperience});
	},
	postSkillz(req, res, next){
		skills.push(req.body);
	},
	generateId(req, res, next){
		req.body.id = skills.length + 1
		next();

		// skills[skills.length-1].id = skills.length;
		// res.status(201).json({skills});
	},
	giveSecret(req, res, next){
		res.status(200).json(secret)
	},



	/////////////////////////

	addHeaders(req, res, next){
		res.status(200).set({
	      'Content-Type': 'application/json',
	      'Access-Control-Allow-Origin': '*',
	      'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
	      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
	      'X-XSS-Protection': '1; mode=block',
	      'X-Frame-Options': 'SAMEORIGIN',
	      'Content-Security-Policy': "default-src 'self' devmountain.github.io"
    	});
    	next();
	}
}