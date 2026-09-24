import { Client, GatewayIntentBits } from 'discord.js';

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds, 
        GatewayIntentBits.GuildMembers, 
        GatewayIntentBits.GuildMessages
    ]});

import { readdirSync } from 'node:fs';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';

export async function loadEvents(client) {
    const eventPath = join(process.cwd(), 'eventHandler');
    const eventFiles = readdirSync(eventPath).filter(file => file.endsWith('.js'));

    for (const file of eventFiles) {
        const pathJoin = join(eventPath, file);
        const pathURL = pathToFileURL(pathJoin);
        const { default : event } = await import(pathURL);

        if (event.once) {
            client.once(event.name, (...args) => event.execute(...args));
        } else {
            client.on(event.name, (...args) => event.execute(...args));
        }
    }   
};
await loadEvents(client);
client.login(process.env.DISCORD_TOKEN);