const strings = require('../strings.json'),
    fetch = require('../../utils/fetch.js');
const run = (guildId, userId, token) => {
    return fetch(`${strings.api.http}/api/g/kick-user?sid=${token}&g=${guildId}&id=${userId}`, "GET", {}, false)
}
module.exports.run = run;
