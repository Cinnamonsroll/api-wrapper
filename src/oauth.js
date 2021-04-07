const strings = require('./strings.json');
const socket = require('./utils/socket');
const vCheck = require('./utils/versionChecker');
const deprecation = require('./utils/deprecatedError');

class oauthClient { 
    constructor(){
        this.oauth2 = false;
    }

    /**
     * 
     * @param {string} userToken The user token
     * @returns User json
     */
    authorize(userToken){
        return require('./oauth/user').run(userToken, this.token);
    }
}

module.exports.oauthClient = oauthClient;