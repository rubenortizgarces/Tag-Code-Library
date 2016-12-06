const Repo = require('../models/repo')

function deleteRepo (req,res) {

	console.log("server_delete")

	const { _id } = req.params;

	Repo.findByIdAndRemove( _id )
		.then(res.sendStatus(200))
		.catch(console.log)
	}

module.exports = deleteRepo;