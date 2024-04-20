const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('pickline')
		.setDescription('Trying to find love? Well Andy gotchu!'),
	async execute(interaction) {
		await interaction.reply({ content: "Is your name Google? Because you have everything Ive been searching for." });
	},
};