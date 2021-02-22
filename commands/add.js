module.exports = {
    name: 'add',
    async run(message) {
        const embed = new Discord.MessageEmbed()
            .setColor('GREEN')
            .setTitle('Link do dodania bota HRejterzy')
            .setDescription("[KLIKNIJ MNIE!](https://discord.com/api/oauth2/authorize?client_id=813094176940883998&permissions=0&scope=bot)")
            .setTimestamp();

        await message.channel.send(embed);
    },
};
