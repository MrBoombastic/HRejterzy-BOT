const quotes = require("../quotes.js");

module.exports = {
    name: 'random',
    desc: "Pokazuje losowy cytat HRejterów.",
    async run(message) {
        const randomNumber = Math.floor(Math.random() * quotes.length);
        const randomQuote = quotes[randomNumber];
        const embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setFooter(`HRejterzy - cytat #${randomNumber}`, "https://codetwocdn.azureedge.net/images/css-assets/top-C2Logo-2020.png")
            .setURL(randomQuote.episode.url)
            .setDescription("> " + randomQuote.text.replaceAll("\n", "\n> "))
            .setTimestamp()
            .setTitle(randomQuote.episode.name);

        await message.channel.send(embed);
    },
};
