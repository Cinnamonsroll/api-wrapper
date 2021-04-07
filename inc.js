const client = require('./src/client').client;
const oauthClient = require('./src/oauth').oauthClient;

module.exports.client = client;
module.exports.oauth = oauthClient;