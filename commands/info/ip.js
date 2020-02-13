const { RichEmbed } = require("discord.js"); module.exports = {
    name: "ip",
    aliases: ["bc", "broadcast"],
    description: "Says all servers being hosted's ip",
    usage: "<output>",
    run: (client, message, args) => {
        message.delete();
	message.reply('The ip to Jareds server is **52.1.71.35**')
	message.reply('The ip to Teagans server is **54.210.134.82**')
    }
}
