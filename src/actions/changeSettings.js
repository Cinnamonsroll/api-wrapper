const strings = require('../strings.json');
const fetch = require('node-fetch');

const run = (username, avatarUrl, token) => {

    return fetch(`${strings.api.http}/bot/api/settings?sid=${token}&username=${username}&avatar=${avatarUrl}`, {
        method: 'POST',
        headers: {
            "Content-Type": "multipart/form-data"
        }
    }).then(data => data.json())
        .then(res => {
            return res;
        });  

}

module.exports.run = run;