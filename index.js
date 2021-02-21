const fs = require('fs');
const Discord = require('discord.js-light');
const {prefix, token, cooldownTime} = require('./config.json');
global.cooldown = new Map();

global.client = new Discord.Client({
    messageCacheLifetime: 10,
    messageCacheMaxSize: 1,
    messageSweepInterval: 10,
    disableEveryone: true,
    fetchAllMembers: false,
    shards: "auto",
    cacheGuilds: true,
    cacheChannels: false,
    cacheOverwrites: true,
    cacheRoles: false,
    cacheEmojis: false,
    cachePresences: false,
    ws: {
        intents: ["GUILD_MESSAGES"]
    }
});
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.on('ready', () => console.log('Rajesh is ready to help you with all of your issues!'));

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot || !message.guild) return;
    if (cooldown.get(message.channel.id) > Date.now()) return message.channel.send("Nie tak szybko! Komendy na tym kanale można używać co 5 sekund!");
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    client.commands.get(command).run(message, args, Discord);
    cooldown.set(message.channel.id, Date.now() + cooldownTime);
});

client.login(token);
