import { Client, Collection, GatewayIntentBits } from 'discord.js';

import { loadEvents } from './handlers/eventHandler.js';
import { loadCommands } from './handlers/commandHandler.js';

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds, 
        GatewayIntentBits.GuildMembers, 
        GatewayIntentBits.GuildMessages
    ]});

client.commands = new Collection();

await loadCommands(client);
await loadEvents(client);

client.login(process.env.DISCORD_TOKEN);