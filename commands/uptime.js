import { SlashCommandBuilder, EmbedBuilder } from "discord.js";

export default {
    data: new SlashCommandBuilder()
    .setName('uptime')
    .setDescription('checking how long does the client log in'),
    async execute(interaction) {
        let totalSeconds = interaction.client.uptime / 1000;
        const days = Math.floor(totalSeconds / 86400);
        totalSeconds %= 86400
        const hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = Math.floor(totalSeconds % 60);
        const timeParts = [];

        if (days > 0) timeParts.push(`${days} Days`);
        if (hours > 0) timeParts.push(`${hours} Hours`);
        if (minutes > 0) timeParts.push(`${minutes} Minutes`);
        if (seconds > 0) timeParts.push(`${seconds} Seconds`);

        const uptimeString = timeParts.length > 0 ? timeParts.join(', ') : 'Just now';
        const uptime = new EmbedBuilder()

        .setColor(process.env.EMBED_COLOR)
        .setTitle('Bot Status')
        .setDescription(`Bot has been online for: \`${uptimeString}\``);

        await interaction.reply({ embeds: [uptime]});
    }
}