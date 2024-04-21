const { Client, Collection, Events, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const { token } = require('./config.json');

const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI("AIzaSyB-I7Y390kDYmlAgk90JWZSZkm5Sbbk_iQ");    //LOL pls don't take my api key :) .env file where :\
const model = genAI.getGenerativeModel({ model: "gemini-pro"});

client.on("interactionCreate", async interaction => {
	if (!interaction.isChatInputCommand()) return;

	if(interaction.commandName === "ping") {
		interaction.reply('pong');
	}

	if(interaction.commandName === "pickupline") {
		const prompt = "Give a pg witty line to compliment a person."
        const result = await model.generateContent(prompt);
        const response = await result.response;
        await interaction.reply(response.text());
	}
});

client.login(token);
