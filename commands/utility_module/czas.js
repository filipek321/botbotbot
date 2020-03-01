// © 2019 Fraffel Media. MultiBot is created by FAXES (FAXES#8655). View the license!
const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {
    message.delete();
    let Timer = args[0];
    if (!args[0]) {
        return message.channel.send("Podaj przedział czasu, na końcu s, m lub h");
    }
    if (args[0] <= 0) {
        return message.channel.send("Podaj przedział czasu, na końcu s, m lub h");
    }
    message.channel.send(":white_check_mark: Pozostały czas do zacmienia: " + `${ms(ms(Timer), { long: true })}`)
    setTimeout(function () {
        message.channel.send(`Zacmienie sie zaczeło @here ` + MessageChannel())
    }, ms(Timer));
}

module.exports.help = {
    name: "czas"
}