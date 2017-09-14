const term = require('terminal-kit').terminal, chalk = require('chalk');
const config = require('./zinc.config')

// System Logging Variables
var srv = chalk.bold.rgb(10, 100, 200)('=> ')
var statusErr = '[' + chalk.red('×') + '] '
var statusScc = '[' + chalk.green('✓') + '] '

var cnGet = [srv + '[GET] API Works! ' + chalk.green('╭∩(^_^)'), srv + '[GET] Search found: ']
var cnPut = [srv + '[POST] ', srv + '[UPDATE] ']
var cnDel = [srv + '[DELETE] Server has Deleted']

var cnMongo = [
    srv + statusScc + 'Mongoose connected succesfully \n', 
    srv + 'Mongoose Listening at ' + config.databaseURI + '\n',
    srv + statusErr + "Failed to Connect to Mongo DB! Exiting . . . "
]
var cnZinc = [srv + statusScc + 'Zinc started sucessfully \n', srv + 'Listening on: ' + config.serverURI + ' . . . \n', srv + 'Zinc Web API is up at ' + config.serverURI + '/api \n']

// System Logging Funtions
function svCheck() { 
    console.log('============================')
    console.log(' ZINC-CRM - PreAlpha v0.0.5 ') 
    console.log('============================')
    term(cnZinc[0] + cnZinc[2] + cnZinc[1])
}
function dbCheck() { 
    term(cnMongo[0]) 
}

// Error Handling Middleware
function errMgmt(err) { 
    term(srv).red(err.name + ': ')( err.message + '\n') 
}
function errFatal(err) { 
    term(srv).red("Server failed to Connecto to Database!\n" + "   SERVER IS SHUTTING DOWN . . .\n")
}



module.exports = {
    errMgmt, errFatal,
    srv, statusErr, statusScc, svCheck, dbCheck, cnGet, cnPut, cnDel, cnMongo, cnZinc
}
