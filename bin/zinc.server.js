const express = require('express'), path = require('path'), http = require('http'), bodyParser = require('body-parser'), mongoose = require('mongoose'), zinc = express();
const zn = require('./zinc.config'), log = require('./zinc.logger'), api = require('./zinc.api');

// Start Connection to Database
mongoose.Promise = require('bluebird')
mongoose.connect(zn.databaseURI, { useMongoClient: true })
mongoose.connection.on('open', function () { log.dbCheck() }) //Mongoose Error Handling
    .on('error', () => { console.log("Mongo Error: ") })
    .on('disconnected', () => { console.log("MongoDB Disconnected! EXITING . . ."); process.exit(0) })

zinc.use(bodyParser.json(), bodyParser.urlencoded({ extended: true }))//Express JSON Body Parser
zinc.use(express.static(path.join(__dirname, '../public'))); // Path for Angular 

// Catchall for URL 
zinc.get('*', function (err, req, res, next) {
    res.sendfile(path.join(__dirname, 'index.html'))
})
zinc.use('/api', api) // Api Starts Here
zinc.use(function (err, req, res, next) { 
    log.errMgmt(err)  // Error handling middleware
    res.send(err)
})

// Zinc Server Start
zinc.listen(zn.svport, zn.svhost, function () {
    log.svCheck();
})
