const strings = require('../strings.json'),
    fetch = require('../../utils/fetch.js');
const run = (guildId, token) => {
    return fetch(`${strings.api.http}/g/api/join?sid=${token}&g=${guildId}`, "GET", {}, false)
}
module.exports.run = run;
