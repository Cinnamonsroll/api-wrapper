# Voltra.api

- [Refrences](#refrences) 
- [Examples](#examples)
- [OAuth](#oauth)


### Refrences

```js
const voltraApi = require('voltra.api'); // import the package
```

```js
const api = new voltraApi.client('SID TOKEN'); // Initiate the bot
```

```js
api.socket.onMessage('CHANNEL ID', async (msg) => { // Open a websocket to receive messages from a channel
    // ...
});
```

```js
const userObj = await api.socket.getUser('USERID'); // Get the user object
```

```js
api.joinGuild('guildid'); // Join a guild
``` 

```js
api.socket.sendMessage('messagecontent', false); // set to true to send a message type of 100
```

```js
api.changeSettings('newusername', 'avatarurl')
```

```js
api.socket.me // EXPERIMENTAL: Gives the bot's user object.
```

### Examples

Simple bot connected to multiple channels:

```js
const voltra = require('voltra.api');
const api = new voltra.client('BOT_TOKEN');
const prefix = '!';

(async () => {
    async function joinGuild(id){ // join guild function (Callable)
        return await api.joinGuild(id); 
    }
    api.socket.onMessage('channel1', async (message) => { // Provide a channel id here to connect and receive messages
        console.log(`${message.author.username}:`, message.string)

        if(!message.string.startsWith(prefix) || message.author.bot) return;
        const args = message.string.slice(prefix.length).trim().split(' ');
        const command = args.shift().toLowerCase();

        if(command == 'commandname'){
           // ...
        }
    });

    api.socket.onMessage('channel2', async (message) => { // Provide a channel id here to connect and receive messages
        console.log(`${message.author.username}:`, message.string)

        if(!message.string.startsWith(prefix) || message.author.bot) return;
        const args = message.string.slice(prefix.length).trim().split(' ');
        const command = args.shift().toLowerCase();

        if(command == 'commandname'){
           // ...
        }
    });
})()
```

### OAuth

```js
const oauth = new voltra.oauth(); // new client
```

```js
const user = await oauth.authorize(); // authorize user by token
console.log('OAuth >', user) // log user
```