import { Events } from 'discord.js';

export default {
    name: Events.InteractionCreate,
    async execute(interaction) {
        if (!interaction.isChatInputCommand()) return;

        const command = interaction.client.commands.get(interaction.commandName);

        if (!command) {
            console.error(`Perintah ${interaction.commandName} tidak ditemukan.`);
            return;
        }

        try {
            await command.execute(interaction);
        } catch (error) {
            console.error(error);
            if (interaction.replied || interaction.deferred) {
                await interaction.followUp({ content: `There''s has been error when execute this! `, ephemeral: true });
            } else {
                await interaction.reply({ content: `There''s has been error when execute this! `, ephemeral: true });
            }
        }
    },
};