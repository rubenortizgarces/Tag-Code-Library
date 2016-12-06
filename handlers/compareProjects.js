const Repo = require('../models/repo')

function compareProjects (req,res){
	console.log(req.params)
	const filter=req.params;
	Repo.find(filter)
		.then( data => res.json(data) )
		.catch( err => console.log(err) )

	}

module.exports = compareProjects;