const Repo = require('../models/repo')

function getProjects(req, res) {

	let tags = req.body.tags
	let user=req.body.owner
	
	console.log(req.body)
	console.log(tags)
	// const tagToLow=tag.toLowerCase()
	if (user===false){console.log("tags false")}
		else if(user===true){console.log("tags true")}
			else if(user===undefined){console.log("___undefined")}
				else if(user===null){console.log("___null")}
					else if(user ===""){console.log("empty")}
						console.log(user)


	

	console.log(tags);

	if (typeof tags === "object" && user !=""){
		for (var i=0; i<tags.length; i++){
		var filter1 = {owner: user}
		var filter2 = {tags: {$elemMatch: {text:tags[i]}}}
			Repo.find(filter1)
			.then(Repo.find(filter2))
			.then ( repos => {
				console.log(repos)
				console.log(filter2)
				res.render("repos", {repos}) 
			})
			.catch( err=> error("err catch"))

			}
	}
	

	if (typeof tags === "object" && user ===""){
		for (var i=0; i<tags.length; i++){
		var filter2 = {tags: {$elemMatch: {text:tags[i]}}}
			Repo.find(filter2)
			.then ( repos => {
				console.log(repos)
				console.log(filter2)
				res.render("repos", {repos}) 
			})
			.catch( err=> error("err catch"))

			}
	}

	if (typeof tags === "string" && user ===""){
		var filter2 = {tags: {$elemMatch: {text:tags}}}
		
			Repo.find(filter2)
			.then ( repos => {
				console.log(repos)
				res.render("repos", {repos}) 
			})
			.catch( err=> error("err catch"))

	}

		if (typeof tags === "string" && user !=""){
		var filter1 = {owner: user}
		var filter2 = {tags: {$elemMatch: {text:tags}}}
		
			Repo.find(filter2)
			.then ( repos => {
				console.log(repos)
				res.render("repos", {repos}) 
			})
			.catch( err=> error("err catch"))

			
	}

	if (typeof tags === "undefined" && user !=""){
		var filter1 = {owner: user}
		Repo.find(filter1)
			.then ( repos => {
				console.log(repos)
				res.render("repos", {repos}) 
			})
			.catch( err=> error("err catch"))

			
	}
	

		if (typeof tags === "undefined" && user ===""){
		Repo.find()
			.then ( repos => {
				console.log(repos)
				res.render("repos", {repos}) 
			})
			.catch( err=> error("err catch"))

			
	}
	}






	
	


	

	
// 		Repo.find(filter1)
// 			.then(Repo.find(filter2))
// 			.then ( repos => {
// 				console.log(repos)
// 				res.render("repos", {repos}) 
// 			})
// 			.catch( err=> error("err catch"))

			
// 	}
// 	const filter1 = {owner: user}
// 	const filter2 = {tags: {$elemMatch: {text:tags}}}

// 	// console.log(filter1);
// 	console.log(filter2);

// 	if(user !="" && tags != undefined){
// 		Repo.find(filter1)
// 			.then(Repo.find(filter2))
// 			.then ( repos => {
// 				console.log(repos)
// 				res.render("repos", {repos}) 
// 			})
// 			.catch( err=> error("err catch"))

// 			}
// 		else if(user ==="" && tags != undefined){
// 			Repo.find(filter2)
// 			.then ( repos => {
// 				console.log(repos)
// 				res.render("repos", {repos}) 
// 			})
// 			.catch( err=> error("err catch"))

// 		}

// 		else if(user ==="" && tags === undefined){
// 			Repo.find()
// 			.then ( repos => {
// 				console.log(repos)
// 				res.render("repos", {repos}) 
// 			})
// 			.catch( err=> error("err catch"))
// 		}
// 		else if(user !="" && tags === undefined){
// 		Repo.find(filter1)
// 			.then ( repos => {
// 				console.log(repos)
// 				res.render("repos", {repos}) 
// 			})
// 			.catch( err=> error("err catch"))

// 			}
// }


	module.exports = getProjects;