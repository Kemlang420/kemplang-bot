import { readdirSync } from 'fs';
import { join } from 'path';
import { pathToFileURL } from 'url';

export async function loadCommands(client) {
    const commandPath = join(process.cwd(), 'commands');
    const commandFiles = readdirSync(commandPath).filter(file => file.endsWith('.js'));

    for (const file of commandFiles) {
        const filePath = join(commandPath, file);
        const pathURL = pathToFileURL(filePath).href;
        const { default : command } = await import(pathURL);

        if (command && command.data && command.execute) {
            client.commands.set(command.data.name, command)
        } else {
            console.log(`[WARNING] File ${file} kehilangan property 'data' atau 'execute'.`)
        }
    }
}
