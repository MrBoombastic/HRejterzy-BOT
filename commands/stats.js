module.exports = {
    name: 'stats',
    async run(message, args, Discord) {

        const embed = new Discord.MessageEmbed()
            .setColor('GREEN')
            .setTitle('Statystyki bota HRejterzy')
            .addField('RAM:', Math.round(process.memoryUsage().rss / 1024 / 1024) + " MB")
            .addField('Serwery', client.guilds.cache.size)
            .setTimestamp();

        await message.channel.send(embed);
    },
};
