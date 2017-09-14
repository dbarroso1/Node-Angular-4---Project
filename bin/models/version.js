const mongoose = require('mongoose'), Schema = mongoose.Schema;

const VersionSchema = new Schema({
    name: String,
    version: String,
    release: String,
    authors: String,
    description: String,
    ApiURI: String
});

const Version = mongoose.model('version', VersionSchema);
module.exports = Version;