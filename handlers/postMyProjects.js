const Repo = require('../models/repo')

function postMyProjects(req, res) {

	console.log("reached")
    console.log(req.body)
    const dataRepo = req.body;
    console.log(dataRepo)
	var newRepo = new Repo(dataRepo);
    console.log(newRepo)


    newRepo.save()
    	.then( res.send("todo bien desde express"))
		.catch( err => {
            console.log("Something failed saving the model...")
            console.log(err)
        })



    // (function(err){
    //         if(err)
    //             res.send(err);

    //         res.json(req.body);
    //     })
    // };
}

module.exports = postMyProjects;