let nodeFetch = require("node-fetch");
module.exports = function fetch(url, type, data, json) {
    if (typeof url !== 'string') throw new TypeError('Please provide a valid url');
    if (typeof type !== 'string' || !['get', 'post'].includes(type.toLowerCase())) throw new TypeError('Invalid type only GET and POST request are allowed');
    if (!(data instanceof Object)) throw new TypeError('Please include data if no data is required provide an empty object');
    if (typeof json !== 'boolean') throw new TypeError('Invalid type of json value should be a boolean');
    return nodeFetch(url, {
            method: type,
            ...data
        }).then(data => data.json())
        .then(res => {
            if (res.code !== 200) return res
            return json === true ? res.json : res
        });
}
}
