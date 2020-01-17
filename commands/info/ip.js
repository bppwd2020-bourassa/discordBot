const { RichEmbed } = require("discord.js"); module.exports = {
    name: "ip",
    aliases: ["bc", "broadcast"],
    description: "Says all servers being hosted's ip",
    usage: "<output>",
    run: (client, message, args) => {
        message.delete();
	message.reply('The ip to the vanilla server is **3.81.133.186**')
	message.reply('The ip to the modded server is **3.90.233.242**')
	message.reply('The link to the dropbox is https://www.dropbox.com/sh/6t6u5q2gf16d8qe/AACQKmY0DdqLaQYLsEDdq6qfa?dl=0')
    }
}
