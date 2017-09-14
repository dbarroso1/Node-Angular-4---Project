// Server Info
var svhost = '10.1.20.201'
var svport = '8080'
var server = svhost + ':' + svport
// Database Info
var dbhost = '10.1.20.208'
var dbport = ':' + '27017'
var dbDir = '/WebAPI'
var database = 'mongodb://dbarroso:vfoWhIDuItZCGCKX@database-shard-00-00-xalpg.mongodb.net:27017,database-shard-00-01-xalpg.mongodb.net:27017,database-shard-00-02-xalpg.mongodb.net:27017/Zinc?ssl=true&replicaSet=database-shard-0&authSource=admin'

module.exports = { server, svport, svhost, database, dbport, dbhost }

