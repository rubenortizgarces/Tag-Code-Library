const express = require('express')
//const fs = require('fs');
const http = require('http');
//const MongoClient = require('mongodb').MongoClient
const bodyparser = require('body-parser')
const path = require('path')

const db = require('./db'); // CONNECTION TO DB!!!

const getProjects = require('./handlers/getProjects')
const postMyProjects=require('./handlers/postMyProjects')
const compareProjects=require('./handlers/compareProjects')
const deleteRepo=require('./handlers/deleteRepo')

const prepareParams = require('./middleware/prepareParams');

const app = express();

//const ENVIRONMENT = process.env.ENVIRONMENT || 'development';
const PORT = process.env.PORT || 3000;


// AUTENTIFICACION
// const passport = require('passport')
// const LocalStrategy = require('passport-social').Strategy; NPM
// const logger = require('morgan');
// const cookieParser = require('cookie-parser');NPM
// const session = require('express-session')
// const flash = require('connect-flash');
// const AUTH = process.env.AUTH || 'local';
// if ( fs.existsSync('.env') ) { // exists
// 	require('dotenv').load()

app.set('view engine', 'pug')


// app.use( logger('dev') );
app.use( express.static(path.join(__dirname,'public')))

app.use( bodyparser.urlencoded({ extended: false }) )
app.use( bodyparser.json() )

// app.use( bodyParser.json() ); NPM
// app.use( cookieParser() ); NPM
// app.use( session({ secret: 'supersecretworddonottelltoanyone'}) );
// app.use( passport.initialize() );
// app.use( passport.session() );
// app.use( flash() );
// const failureRedirect = '/auth/github/';


// app.get( '/auth/github/',
// 	passport.authenticate('github'),
// 	(req, res) => {} // handler
// );

// app.get( '/auth/github/callback',
// 	passport.authenticate('github', { failureRedirect }), // middleware
// 	(req, res) => res.redirect('/account') // handler
// );

//app.use( prepareParams )

app.get('/', (req,res) => {
	res.render('index')
	})
	
app.post('/repos', getProjects)
app.delete('/delete/:_id', deleteRepo) 

app.get('/myRepos', function(req, res) {
    res.sendFile(path.join(__dirname + '/myRepos'));
});

app.post('/api/repos', postMyProjects)
app.get('/api/compare_repos/:owner', compareProjects)





	
	
	

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`) )