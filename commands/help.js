module.exports = {
    name: 'help',
    async run(message) {
        const embed = new Discord.MessageEmbed()
            .setColor('GREEN')
            .setTitle('Pomoc bota HRejterzy')
            .addField('Prefix:', config.prefix, true)
            .addField('Komendy:', `\`random\` - Pokazuje losowy cytat HRejterów.` +
                `\n\`stats\` - Pokazuje statystyki bota.` +
                `\n\`help\` - Wyświetla niniejszą pomoc.` +
                `\n\`add\` - Udostępnia link do dodania bota.`, true)
            .setURL("https://github.com/MrBoombastic/HRejterzy-BOT")
            .setTimestamp();

        await message.channel.send(embed);
    },
};
