var Discord = require('discord.js');
var exampleBot = new Discord.Client();
var botToken = 'Mjc5MDA4ODk5NjI4MDA3NDI0.C31B9Q.Lv1qYIMKrX_b-N8vB8JqUvSFHXA';


exampleBot.on('message', botMsg => {
   if (botMsg.content.startsWith('ping')) {
     botMsg.channel.sendMessage('pong!');
     console.log('pong-ed ' + botMsg.author.username)
   }
});

exampleBot.login(botToken);
