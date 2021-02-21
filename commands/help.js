module.exports = {
    name: 'help',
    async run(message) {

        const embed = new Discord.MessageEmbed()
            .setColor('GREEN')
            .setTitle('Pomoc bota HRejterzy')
            .addField('Prefix:', config.prefix, true)
            .addField('Komendy:', `\`${config.prefix}random\` - Pokazuje losowy cytat HRejterów.` +
                `\n\`${config.prefix}stats\` - Pokazuje statystyki bota.` +
                `\n\`${config.prefix}help\` - Wyświetla niniejszą pomoc.`, true)
            .setURL("https://github.com/MrBoombastic/HRejterzy-BOT")
            .setTimestamp();

        await message.channel.send(embed);
    },
};
