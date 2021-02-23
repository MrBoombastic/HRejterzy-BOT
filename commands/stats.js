const version = require('child_process')
    .execSync('git rev-parse --short HEAD')
    .toString().trim();
const quotes = require("../quotes.js");
module.exports = {
    name: 'stats',
    desc: "Pokazuje statystyki bota.",
    async run(message) {

        const embed = new Discord.MessageEmbed()
            .setColor('GREEN')
            .setTitle('Statystyki bota HRejterzy')
            .addField("Cytatów:", quotes.length)
            .addField('RAM (RSS):', Math.round(process.memoryUsage().rss / 1024 / 1024) + " MB", true)
            .addField('Serwery:', client.guilds.cache.size, true)
            .addField("Wersja: ", `[${version}](https://github.com/MrBoombastic/HRejterzy-BOT/commit/${version})`, true)
            .addField("Uptime (klient/proces):", `${Math.round(client.uptime / 1000 / 60)} minut/${Math.round(process.uptime() / 60)} minut`, true)
            .addField("Ping:", client.ws.ping, true)
            .addField("isPies()", "true", true)
            .setURL("https://github.com/MrBoombastic/HRejterzy-BOT")
            .setImage("https://i.imgur.com/rO1vNfp.png")
            .setTimestamp();

        await message.channel.send(embed);
    },
};
