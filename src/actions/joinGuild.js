const strings = require('../strings.json');
const fetch = require('node-fetch');

const run = (guildId, token) => {

    return fetch(`${strings.api.http}/g/api/join?sid=${token}&g=${guildId}`)
        .then(data => data.json())
            .then(res => {
                return res;
            });  

}

module.exports.run = run;