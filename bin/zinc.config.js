// Server Info
var svhost = 'localhost'
var svport = '4200'
var serverURI = svhost + ':' + svport
// Database Info
var dbhost = '10.1.20.208'
var dbport = ':' + '27017'
var dbDir = '/WebAPI'
var databaseURI = 'mongodb://dbarroso:vfoWhIDuItZCGCKX@database-shard-00-00-xalpg.mongodb.net:27017,database-shard-00-01-xalpg.mongodb.net:27017,database-shard-00-02-xalpg.mongodb.net:27017/Zinc?ssl=true&replicaSet=database-shard-0&authSource=admin'

module.exports = {
    serverURI, databaseURI,
    svport, svhost,
    dbport, dbhost
}
