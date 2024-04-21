const { REST, Routes, SlashCommandBuilder } = require('discord.js');
const { botID, serverID, discordToken } = require('./config.json');

// Construct and prepare an instance of the REST module
const rest = new REST().setToken(discordToken);

// and deploy your commands!
const slashRegister = async () => {
    try {
        await rest.put(Routes.applicationGuildCommands(botID, serverID), {
            body: [
                new SlashCommandBuilder()
                .setName("pickupline")
                .setDescription("Ask me for a pickup line!"),
                new SlashCommandBuilder()
                .setName("ping")
                .setDescription("Replies with a pong")
            ]
        })
    }catch (error) {
        console.error(error)
    }
}

slashRegister();
