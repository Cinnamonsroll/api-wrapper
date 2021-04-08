const strings = require('./strings.json');
const socket = require('./utils/socket');
const vCheck = require('./utils/versionChecker');
const deprecation = require('./utils/deprecatedError');
vCheck();

let uid;

class client { 
    constructor(sid){
        this.token = sid;
        this.socket = new socket(this.token);
    }

    /**
     * 
     * @param {string} guildId Guild id
     * @returns Json object
     */
    joinGuild(guildId){
        return require('./actions/joinGuild').run(guildId, this.token);
    }

    /**
     * 
     * @param {string} id Guild id
     * @returns Json object
     */
    getChannel(id){
        return require('./actions/getChannel').run(id, this.token);
    }

    /**
     * 
     * @param {String} username New username.
     * @returns Json object
     */

    changeUsername(username)   {
        return require('./actions/newUsername').run(username, this.token);
    }
}

module.exports.client = client;