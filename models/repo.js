const mongoose = require('mongoose')

const collection = 'gitnet';

// Schema definition
const repoSchema = new mongoose.Schema({
	name: String,
	html_url: String,
	repo_url: String,
	tags:[{
		text: String}],
	owner:String,
	average: Number,
	reviews:[{
		user_url: String,
		user_text: String,
		user_mark: Number,
	}]
},
{ collection });

// Model definition
var repo = mongoose.model('repo', repoSchema);

module.exports = repo
