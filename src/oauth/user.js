const strings = require('../strings.json');
const fetch = require('node-fetch');

const run = (token) => {

    return fetch(`${strings.api.http}/token/access?token=${token}`, {
        method: 'GET'
    }).then(data => data.json())
        .then(res => {
            if(res.code !== 200) return res;

            return res.json;
        });  

}

module.exports.run = run;