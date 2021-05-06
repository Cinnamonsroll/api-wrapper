module.exports = function fetch(url, type, data, json){
if(!url) throw new Error("Please provide a valid url")
if(!type || !["get", "post"].includes(type.toLowerCase())) throw new Error("Invalid type only GET and POST request are allowed")
if(!data || typeof data !== "object") throw new Error("Please include data if no data is required provide an empty object")
if(!json || ![true, false].includes(json)) throw new Error("Invalid type of json value should be a boolean")

}
