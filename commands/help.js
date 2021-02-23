module.exports = {
    name: 'help',
    desc: "Wyświetla niniejszą pomoc.",
    async run(message) {
        const commandsHelp = [];
        client.commands.forEach(com => commandsHelp.push(`\`${com.name}\` - ${com.desc || "Żasą nided!"}`));
        const embed = new Discord.MessageEmbed()
            .setColor('GREEN')
            .setTitle('Pomoc bota HRejterzy')
            .addField('Prefix:', config.prefix, true)
            .addField('Komendy:', commandsHelp.join("\n"), true)
            .setURL("https://github.com/MrBoombastic/HRejterzy-BOT")
            .setImage("https://i.imgur.com/0EbUCV1.png")
            .setTimestamp();

        await message.channel.send(embed);
    },
};
