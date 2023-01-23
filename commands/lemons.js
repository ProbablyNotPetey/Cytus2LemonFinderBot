const { SlashCommandBuilder } = require('discord.js');
const lemonCalc = require('../lemonCalc.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('lemons')
        .setDescription('Finds the amount of lemon perfects in a score.')
        .addIntegerOption(option =>
            option.setName('perfects')
                .setDescription('The amount of perfects.')
                .setRequired(true))
        .addIntegerOption(option =>
            option.setName('goods')
                .setDescription('The amount of goods.')
                .setRequired(true))
        .addIntegerOption(option =>
            option.setName('bads')
                .setDescription('The amount of bads.')
                .setRequired(true))
        .addIntegerOption(option =>
            option.setName('misses')
                .setDescription('The amount of misses.')
                .setRequired(true))
        .addNumberOption(option =>
            option.setName('tp')
                .setDescription('The TP of the score.')
                .setRequired(true)),


    async execute(interaction) {
        const p = interaction.options.getInteger('perfects');
        const g = interaction.options.getInteger('goods');
        const b = interaction.options.getInteger('bads');
        const m = interaction.options.getInteger('misses');
        const tp = interaction.options.getNumber('tp');
        await interaction.reply(`There were ${lemonCalc.getLemons(p, g, b, m, tp)} lemon perfects.`);
    },
};