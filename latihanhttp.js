const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.writeHead(200, {'Content-Type': 'text/html' })
        res.end('ini adalah halaman utama');
    } else if(req.url === '/about'){
        res.writeHead(200, {'Content-Type': 'text/html' })
        res.end('ini adalah halaman About');
    } else if(req.url === '/profile'){
        res.writeHead(200, {'Content-Type': 'text/html' })
        res.end('ini adalah halaman Profile');
    }else{
        res.writeHead(404, {'Content-Type': 'text/html' })
        res.end('not found');
    }
})

const port=3333;
server.listen(port, () => {
    console.log(`Server running on port ${port}`)
})