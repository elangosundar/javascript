const express 	= require('express');
const bodyParser= require('body-parser');

const MongoClient = require('mongodb').MongoClient;
const app 		= express();

app.use(bodyParser.urlencoded({extended: true}));

var db;


/*
//### db connectivity By using Mlab ### 

const dbUrl = `mongodb://krishva:${encodeURIComponent('Krishva@2017')}@ds014118.mlab.com:14118/krishva-mongodb`;

MongoClient.connect(dbUrl, (err, client) => {
  
  	if (err) return console.log("Your error is "+err)
	
	db = client.db('krishva-mongodb') // whatever your database name is

	app.listen(3005, () => {
		console.log('listening on 3005')
	})

})

app.get('/', (req, res) => {
  db.collection('quotes').find().toArray((err, result) => {
    if (err) return console.log(err)
    // renders index.ejs
    res.render('index.ejs', {quotes: result})
  })
})

app.post('/quotes', (req, res) => {
  db.collection('quotes').save(req.body, (err, result) => {
    if (err) return console.log(err)

    console.log('saved to database')
    res.redirect('/')
  })
})

*/


/* Mongodb connectivity by using Local mongo db */ 

const dbUrl = `mongodb://localhost/mongonode`;

MongoClient.connect(dbUrl, (err, client) => {
  
  	if (err) return console.log("Your error is "+err)
	
	db = client.db('mongonode') // whatever your database name is

	app.listen(3006, () => {
		console.log('listening on 3006')
	})

})

app.post('/quotes', (req, res) => {
  db.collection('quotes').save(req.body, (err, result) => {
    if (err) return console.log(err)

    console.log('saved to database')
    res.redirect('/')
  })
})

app.get('/', (req, res) => {
  db.collection('quotes').find().toArray((err, result) => {
    if (err) return console.log(err)
    // renders index.ejs
    res.render('index.ejs', {quotes: result})
  })
})