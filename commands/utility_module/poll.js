const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    message.delete();
    let question = args.slice(0).join(" ");

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Invalid permissions.").then(msg => msg.delete(10000));
    if (args.length === 0)
        return message.reply('**Niepoprawny format:** `.Poll <Question>`')

    const embed = new Discord.RichEmbed()
        .setTitle("Rozpoczęto głosowanie!")
        .setColor("#2186ba")
        .setDescription(`${question}`)
        .setFooter(`Głosowanie Rozpoczęte przez: ${message.author.username}`, `${message.author.avatarURL}`)

    message.channel.send({ embed }).then((message) => {
        message.react('👍')
            .then(() => message.react('👎'))
    });

}

module.exports.help = {
    name: "poll"
}