import { Events, EmbedBuilder } from "discord.js";

export default {
    name: Events.GuildMemberRemove,
    once: false,
    execute(guildMember) {
        const leaveChannel = guildMember.guild.channels.cache.get('1444261750915465257');

        if (leaveChannel) {
            const Humans = guildMember.guild.members.cache.filter(m => !m.user.bot).size;
            const Bots = guildMember.guild.members.cache.filter(b => b.user.bot).size;

            const leaveEmbed = new EmbedBuilder()
            .setColor(process.env.EMBED_COLOR)
            .setTitle('Member Left!')
            .setDescription(`Goodbye to ${guildMember.guild.name}, **${guildMember}**`)
            .setFields({name: `👥 Total Members: ${guildMember.guild.memberCount}`, value: `Members: **${Humans}** \nBots: **${Bots}**`})
            .setThumbnail(guildMember.user.displayAvatarURL())

            leaveChannel.send({ content:`${guildMember}`, embeds: [leaveEmbed]});
        }
    }
}