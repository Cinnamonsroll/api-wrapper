# Voltra.api

- [Refrences](#refrences) 


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