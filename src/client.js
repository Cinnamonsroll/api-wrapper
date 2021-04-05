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
     * @param {String} avatarUrl Url to a png. (MUST NOT CONTAIN ANY SPACES ETC) (MUST BE A VALID IMAGE)
     * @returns Json object
     */
    changeSettings(username, avatarUrl){
        return require('./actions/changeSettings').run(username, avatarUrl, this.token);
    }
}

module.exports.client = client;