const Discord = require('discord.js')
var bot = new Discord.Client()
const prefix = 'Lotus'

bot.login('NDg5OTE0MzQ3NTQwMzE2MTkw.DnyvOQ.0n4LtJ2KYSM3g7sKZUHsHfN-eYE')

bot.on('guildMemberAdd', async member => {
const channel = member.guild.channels.find('name', 'général');
if (!channel) return;
channel.send(`:tada: Bienvenue sur le Discord du clan mon chere Kubrow ! ${member} :tada:`);
}
);
