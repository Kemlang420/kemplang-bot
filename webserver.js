import http from 'node:http';

const PORT = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Discord bot ok');
});

export function keepAlive() {
    server.listen(PORT, () => {
        console.log(`Server webserver berjalan di port ${PORT}`);
    });
}