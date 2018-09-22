const Discord = require('discord.js');

var bot = new Discord.Client();
const token = process.env.token
bot.on('guildMemberAdd', async member => {
const channel = member.guild.channels.find('name', 'général');
if (!channel) return;
channel.send(`:tada: Bienvenue sur le Discord du clan mon chere Kubrow ! ${member} :tada:`);

});
bot.login(token);
