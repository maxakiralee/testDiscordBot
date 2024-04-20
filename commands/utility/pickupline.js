
const { SlashCommandBuilder } = require('discord.js');

const wait = require('node:timers/promises').setTimeout;

module.exports = {
	data: new SlashCommandBuilder()
		.setName('pickline')
		.setDescription('Trying to find love? Well Andy gotchu!'),
	async execute(interaction) {
		await interaction.reply('Pong!');
            await wait(4_000);
            await interaction.editReply('BRO!');
        //await interaction.reply({ content: "Is your name Google? Because you have everything Ive been searching for." });
	},
};