const Discord = require("discord.js");
const bot = new Discord.Client();


bot.on('ready', () => {
  bot.user.setGame('Type !mc for commands')
})

bot.on('message', (message) => {
  if(message.content.substring(0,3) == "!mc"){
      if(message.content.includes("dropbox")){
        message.reply('The Dropbox link for the mods is ');
      }else if(message.content.includes("ip")){
        message.reply('The ip to the server is **24.183.189.1**')
      }
      else if (message.content.includes("clear")) {
        if (message.member.hasPermission("bot developer")) {
          async function clear() {
            msg.delete();
            const fetched = await msg.channel.fetchMessages({limit: 99});
            msg.channel.bulkDelete(fetched);
          }
        }
      }
    }
});

bot.login('NjYyNjg2NTc4MTA3MzUxMTIw.Xg9oVQ.1QLOyq5wbyTOGxra_rCnPy0y3P8');


/*
///// Testing /////
const Discord = require("discord.js");
const bot = new Discord.Client();


bot.on('ready', () => {
  bot.user.setGame('Type !mc for commands')
})

bot.on('message', (message) => {
  if(message.content.substring(0,3) == "!mc"){
      if(message.content.includes("dropbox")){
        message.reply('The Dropbox link for the mods is https://www.dropbox.com/sh/t47pr8pms901l40/AACDmTKXS-YOPduUJB7rC5dpa?dl=0');
      }else if(message.content.includes("ip")){
        message.reply('The ip to the server is **24.183.189.1**')
      }
      else if (message.content.includes("clear")) {
        if (message.member.hasPermission("MANAGE_MESSAGES")) {
            message.channel.fetchMessages()
               .then(function(list){
                    message.channel.bulkDelete(list);
                }, function(err){message.channel.send("ERROR: ERROR CLEARING CHANNEL.")})
        }
      }else if(message.content.includes("start server")){
        const { spawn } = require('child_process');
        const bat = spawn('cmd.exe', ['/c', 'Server.bat']);
        message.reply('Server starting; will be up soon.');
        bat.stdout.on('data', (data) => {
          console.log(data.toString());
        });

        bat.stderr.on('data', (data) => {
          console.log(data.toString());
        });

        bat.on('exit', (code) => {
          console.log(`Child exited with code ${code}`);
          message.reply('Server failed to start; please retry');
        });
      }else if (message.content.includes("shutdown server") && (message.member.roles.find(r => r.name === "Owner") || message.member.roles.find(r => r.name === "bot developer"))) {
        const { spawn } = require('child_process');
        const bat = spawn('cmd.exe', ['/c', 'Stop.bat']);
        message.reply('Server starting; will be up soon.');
        bat.stdout.on('data', (data) => {
          console.log(data.toString());
        });

        bat.stderr.on('data', (data) => {
          console.log(data.toString());
        });

        bat.on('exit', (code) => {
          console.log(`Child exited with code ${code}`);
          message.reply('Server failed to start; please retry');
        });
      }
    }
});
bot.login('NjYyNjg2NTc4MTA3MzUxMTIw.Xg9oVQ.1QLOyq5wbyTOGxra_rCnPy0y3P8');
*/
