const strings = require('../strings.json'), fetch = require('../../utils/fetch.js');
const run = (uid, token) => {
return fetch(`${strings.api.http}/api/u?id=${uid}&sid=${token}`, "GET", {}, true)
}
module.exports.run = run;
