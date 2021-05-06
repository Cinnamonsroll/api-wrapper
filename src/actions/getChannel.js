const strings = require('../strings.json'),
    fetch = require('../../utils/fetch.js');
const run = (id) => {
    return fetch(`${strings.api.http}/api/gc?id=${id}`, "GET", {}, true)
}
module.exports.run = run;
