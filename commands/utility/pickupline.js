const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI("AIzaSyB-I7Y390kDYmlAgk90JWZSZkm5Sbbk_iQ");
const model = genAI.getGenerativeModel({ model: "gemini-pro"});

const { SlashCommandBuilder } = require('discord.js');

const wait = require('node:timers/promises').setTimeout;

module.exports = {
	data: new SlashCommandBuilder()
		.setName('pickline')
		.setDescription('Trying to find love? I got U!'),
	async execute(interaction) {

        const prompt = "Give a witty line for someone you love."
      
        const result = await model.generateContent(prompt);
        const response = await result.response;
        await interaction.reply(response.text());
        /*
		await interaction.reply('Pong!');
            await wait(4_000);
            await interaction.editReply('BRO!');
            */
        //await interaction.reply({ content: "Is your name Google? Because you have everything Ive been searching for." });
	},
};