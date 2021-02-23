const quotes = require("../quotes.js");

module.exports = {
    name: 'quote',
    desc: "Wyświetla wskazany cytat.",
    async run(message, args) {
        const number = parseInt(args[0]);
        if (Number.isNaN(number)) return message.channel.send("Podana wartość nie jest liczbą!");
        const quote = quotes[number];
        if (!quote) return message.channel.send("Nie znaleziono cytatu!");
        const embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setFooter(`HRejterzy - cytat #${number}`, "https://codetwocdn.azureedge.net/images/css-assets/top-C2Logo-2020.png")
            .setURL(quote.episode.url)
            .setDescription("> " + quote.text.replaceAll("\n", "\n> "))
            .setTimestamp()
            .setTitle(quote.episode.name);

        await message.channel.send(embed);
    },
};
