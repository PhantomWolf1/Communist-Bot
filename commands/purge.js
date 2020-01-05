module.exports.run = (bot, message, args, Discord) => {
  if(message.member.hasPermission(["DELETE_MESSAGE"])) {
    message.channel.bulkDelete(args[0]);
  } else {
    message.channel.say("❌ You do not have permission to use this ❌");
  }
}

module.exports.help = {
"name": "purge"
}
