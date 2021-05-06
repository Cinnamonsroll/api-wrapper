const strings = require('../strings.json'),
    fetch = require('../../utils/fetch.js');
const run = (username, avatarUrl, token) => {
    let postData = {
            sid: token,
            username
        },
        let formBody = [];
    for (let property in postData) {
        formBody.push(encodeURIComponent(property) + "=" + encodeURIComponent(postData[property]))
    }
    formBody = formBody.join("&")
    return fetch(`${strings.api.http}/bot/api/username`, "POST", {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body: formBody
    }, false)
}
module.exports.run = run;
