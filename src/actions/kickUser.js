const strings = require('../strings.json');
const fetch = require('node-fetch');

const run = (guildId, userId, token) => {

    return fetch(`${strings.api.http}/api/g/kick-user?sid=${token}&g=${guildId}&id=${userId}`)
        .then(data => data.json())
            .then(res => {
                return res;
            });  

}

module.exports.run = run;