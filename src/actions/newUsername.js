const strings = require('../strings.json');
const fetch = require('node-fetch');

const run = (username, avatarUrl, token) => {

    let postData = {
        sid: token,
        username: username
    }

    var formBody = [];
    for (var property in postData) {
        var encodedKey = encodeURIComponent(property);
        var encodedValue = encodeURIComponent(postData[property]);
        formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");


    return fetch(`${strings.api.http}/bot/api/username`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body: formBody
    }).then(res => res.json())
        .then(data => {
            return data;
        });

}

module.exports.run = run;