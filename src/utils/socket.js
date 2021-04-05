const strings = require('../strings.json');
const io = require('socket.io-client');
const deprecation = require('../utils/deprecatedError');
const chalk = require('chalk');
const mname = require("../../package.json").name;

class socket { 
    constructor(sid){
        this.token = sid;
        this.conn = io(strings.api.ws, {
            transports: ["websockets", "polling"],
            autoConnect: true
        });
        this.uid = null;
        this.me = null;

        this.conn.on("connect", () => {
            this.conn.on("ratelimit", (data) => {
                throw new Error(chalk.greenBright(`[${mname} | WS] -> ${data.text} For ${data.seconds}`))
            });
        });
    }

    /**
     * @param {String} channel Channel id.
     * @param {Function} cb Callback to receive data.
     */
    onMessage(channel, cb){
        // ? Connect channel first
        this.conn.emit('channel-connect', {
            sid: this.token,
            channel: channel
        });

        this.conn.on("message", (message) => {
            return cb(message)
        });
    }

    /**
     * 
     * @param {String} channel Channel id.
     * @param {String} msg Message content.
     * @param {Boolean} isEmbed Makes the message type 100.
     * @param {String} embedColor Give the embed sidebar a color! (Optional)
     */
    sendMessage(channel, msg, isEmbed, embedColor){
        let mtypef = 0;
        if(isEmbed) mtypef = 100;
        let postData = {
            sid: this.token,
            channel: channel,
            content: msg,
            channelParam: `chn:${channel}`,
            type: 'guild',
            mtype: mtypef,
            color: embedColor
        }
        this.conn.emit("new-message", postData);
    }

    /**
     * 
     * @param {String} id The user id
     * @returns Json object
     */
    getUser(id){
        return require('../actions/getUser').run(id, this.token);
    }
}

module.exports = socket;