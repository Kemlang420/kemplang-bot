import { ActivityType, Events } from 'discord.js';

export default {
    name: Events.ClientReady,
    once: true,
    async execute(client) {
        for (const guild of client.guilds.cache.values()) {
            await guild.members.fetch();
        }
        console.log("all members has been cache!!");

        client.user.setPresence({ 
            activities: [{
                name: 'idk what to type ok just watch it',
                type: ActivityType.Streaming,
                url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
            }]
        });
        console.log(`Bot log in as ${client.user.tag}`);
    }
};