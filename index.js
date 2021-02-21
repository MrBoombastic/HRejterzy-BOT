const fs = require('fs');
global.Discord = require('discord.js-light');
global.config = require('./config.json');
const cooldown = new Map();

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
client.commands = new Map();
const updateActivity = () => client.user.setActivity("hrhelp | Error: Object reference is not set to an instance of an object.");

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.on('ready', () => {
    console.log('Rajesh is ready to help you with all of your issues!');
    updateActivity();
    setInterval(updateActivity, 1000 * 60 * 5);
});

client.on('message', message => {
    if (!message.content.startsWith(config.prefix) || message.author.bot || !message.guild) return;
    if (cooldown.get(message.channel.id) > Date.now()) return message.channel.send(`Nie tak szybko! Komend na tym kanale można używać co ${config.cooldownTime / 1000} sekundy!`);
    const args = message.content.slice(config.prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    client.commands.get(command).run(message, args, Discord);
    cooldown.set(message.channel.id, Date.now() + config.cooldownTime);
});

client.login(config.token);
