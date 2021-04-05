const strings = require('../strings.json');
const fetch = require('node-fetch');

const run = (uid, token) => {

    return fetch(`${strings.api.http}/api/u?id=${uid}&sid=${token}`, {
        method: 'GET'
    }).then(data => data.json())
        .then(res => {
            if(res.code !== 200) return res;

            return res.json;
        });  

}

module.exports.run = run;