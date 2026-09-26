import { Events, EmbedBuilder } from "discord.js";

export default {
    name: Events.GuildMemberAdd,
    once: false,
    execute(guildMember) {
        const welcomeChannel = guildMember.guild.channels.cache.get('1444261750915465257')

        if(welcomeChannel) {
            const Humans = guildMember.guild.members.cache.filter(h => !h.user.bot).size;
            const Bots = guildMember.guild.members.cache.filter(b => b.user.bot).size;

            const joinEmbed = new EmbedBuilder()
            .setColor(process.env.EMBED_COLOR)
            .setTitle('Member Joined!')
            .setDescription(`Welcome to ${guildMember.guild.name}, ${guildMember}`)
            .setFields({name: `👥 Total Members: ${guildMember.guild.memberCount}`, value: `Members: **${Humans}** \nBots: **${Bots}**`})
            .setThumbnail(guildMember.user.displayAvatarURL())

            welcomeChannel.send( { content:`${guildMember}` ,embeds: [joinEmbed]});
        }
    }
}