const quotes = require("../quotes.js");

module.exports = {
    name: 'random',
    async run(message, args, Discord) {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        const embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setFooter('HRejterzy', "https://codetwocdn.azureedge.net/images/css-assets/top-C2Logo-2020.png")
            .setURL(randomQuote.episode.url)
            .setDescription("> " + randomQuote.text.replaceAll("\n", "\n> "))
            .setTimestamp()
            .setTitle(randomQuote.episode.name);

        await message.channel.send(embed);
    },
};
