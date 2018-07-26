const Discord = require('discord.js');
const client = new Discord.Client();
 const prefix = "&";
client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'zg') {
        message.reply('pong');
      }
});



client.login(process.env.BOT_TOKEN);
