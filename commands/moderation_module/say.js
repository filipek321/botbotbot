// © 2019 Fraffel Media. MultiBot is created by FAXES (FAXES#8655). View the license!
const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    message.delete();
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("brak permissi.").then(msg => msg.delete(10000));
    let botMessage = args.join(" ");

    if (botMessage.length < 1) return message.channel.send("Proszę podać wiadomość").then(msg => msg.delete(5000));
    message.channel.send(botMessage);
}

module.exports.help = {
    name: "say"
}