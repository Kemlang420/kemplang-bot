import { ActivityType, Events } from 'discord.js';

export default {
    name: Events.ClientReady,
    once: true,
    async execute(client) {
        for (const guild of client.guilds.cache.values()) {
            await guild.members.fetch();
        }
        console.log("all members has been cache!!");

        const setBotPresence = () => {
            client.user.setPresence({ 
                activities: [{
                    name: 'Subscribe to Kemplang',
                    type: ActivityType.Streaming,
                    url: 'https://www.youtube.com/watch?v=ocQGwKOjrRc&t'
                }]
            })
        }
        setBotPresence()
        setInterval(setBotPresence, 60 * 60 * 1000 )
        console.log(`Bot log in as ${client.user.tag}`);
    }
};