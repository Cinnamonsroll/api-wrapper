const strings = require('../strings.json'),
    fetch = require('../../utils/fetch.js');
const run = (username, avatarUrl, token) => {
    return fetch(`${strings.api.http}/bot/api/settings?sid=${token}&username=${username}&avatar=${avatarUrl}`, "POST", {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    }, true)
}
module.exports.run = run;
