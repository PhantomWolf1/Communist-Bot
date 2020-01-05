module.exports.run = (bot, message, args, Discord) => {
let em = new Discord.RichEmbed()
  .setTitle("Our Commands")
  .addField("Help", "Shows this output.")
  .setColor("RED")
  
    message.channel.send({embed: em})
}

module.exports.help = {
"name": "help"
}
