import { ActivityType, Events } from 'discord.js';

export default {
    name: Events.ClientReady,
    once: true,
    async execute(client) {
        console.log(`Bot berhasil login sebagai ${client.user.tag}`);

        for (const guild of client.guilds.cache.values()) {
            await guild.members.fetch();
        }
        console.log("Semua member berhasil di-cache!");

        client.user.setPresence({ 
            activities: [{
                name: 'idk what to type ok just watch it',
                type: ActivityType.Streaming,
                url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
            }]
        });
    }
};