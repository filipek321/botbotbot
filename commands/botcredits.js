// REMOVING OR EDITING THIS FILE IS A BREACH OF THE LICENSE. LEAVE IT AS IS AND DON'T DISABLE IT! [START NO EDIT]
// © 2019 Fraffel Media. MultiBot is created by FAXES (FAXES#8655). View the license!
const Discord = require("discord.js");
const botconfig = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {
    message.delete();
    let botembed = new Discord.RichEmbed()
        .setDescription("Information")
        .setColor(botconfig["bot_setup"].main_embed_color)
        .setThumbnail("")
        .addField("Bot Name", `${bot.user.username} / Original Name: jacek`)
        .addField("Servers", bot.guilds.size)
        .addField("Credits", `This bot is made by .Young Szymon lee#6394`)
        .addField("Information", `bot został stworzony pod serwer HoneyRP`);

    message.channel.send(botembed).then(msg => msg.delete(60000));
}

module.exports.help = {
    name: "botcredits",
    name2: "credits",
    name3: "multibot"
}
// REMOVING OR EDITING THIS FILE IS A BREACH OF THE LICENSE. LEAVE IT AS IS AND DON'T DISABLE IT! [END NO EDIT]