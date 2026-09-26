import { readdirSync } from 'node:fs';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';

export async function loadEvents(client) {
    const eventPath = join(process.cwd(), 'events');
    const eventFiles = readdirSync(eventPath).filter(file => file.endsWith('.js'));

    for (const file of eventFiles) {
        const pathJoin = join(eventPath, file);
        const pathURL = pathToFileURL(pathJoin).href;
        const { default : event } = await import(pathURL);

        if (event.once) {
            client.once(event.name, (...args) => event.execute(...args));
        } else {
            client.on(event.name, (...args) => event.execute(...args));
        }
    }   
};