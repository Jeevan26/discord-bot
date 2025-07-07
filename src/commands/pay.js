const { SlashCommandBuilder } = require('discord.js');
const cooldowns = new Map();

module.exports = {
    data: new SlashCommandBuilder()
        .setName('pay')
        .setDescription('pay azoy money for college'),
    async execute(interaction) {
        const cooldownAmount = 5 * 1000; // 10 seconds in milliseconds
        const userId = interaction.user.id;

        if (cooldowns.has(userId)) {
            const expirationTime = cooldowns.get(userId) + cooldownAmount;
            if (Date.now() < expirationTime) {
                const timeLeft = ((expirationTime - Date.now()) / 1000).toFixed(1);
                return interaction.reply({ content: `Azow is in college; please wait ${timeLeft}s before using this command again. :D`, ephemeral: true });
            }
        }

        cooldowns.set(userId, Date.now());
        setTimeout(() => cooldowns.delete(userId), cooldownAmount);

        await interaction.reply('Thanks for the money!');
    },
}; 