const version = require('child_process')
    .execSync('git rev-parse --short HEAD')
    .toString().trim();

module.exports = {
    name: 'stats',
    async run(message) {

        const embed = new Discord.MessageEmbed()
            .setColor('GREEN')
            .setTitle('Statystyki bota HRejterzy')
            .addField('RAM (RSS):', Math.round(process.memoryUsage().rss / 1024 / 1024) + " MB", true)
            .addField('Serwery:', client.guilds.cache.size, true)
            .addField("Wersja: ", `[${version}](https://github.com/MrBoombastic/HRejterzy-BOT/commit/${version})`, true)
            .addField("Uptime (klient/proces):", `${Math.round(client.uptime / 1000 / 60)} minut/${Math.round(process.uptime() / 60)} minut`)
            .setURL("https://github.com/MrBoombastic/HRejterzy-BOT")
            .setTimestamp();

        await message.channel.send(embed);
    },
};
