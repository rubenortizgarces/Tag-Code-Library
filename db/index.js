 const mongoose = require('mongoose')
 mongoose.Promise = global.Promise;


//const MongoClient = require('mongodb').MongoClient
//mongoose.Promise = global.Promise;

const urlDB = process.env.URL_DB || 'mongodb://localhost/test';

console.log(urlDB) 

const db = mongoose.connection;
db.on('error', () => console.log('connection error:') );
db.once('open', () => console.log(urlDB) );

mongoose.connect( urlDB ); // WE CONNECT HERE!!!



module.exports = mongoose;