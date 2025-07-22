import http from 'http'

const server = http.createServer((req, res) => {
    const { method } = req
    switch (method) {
        case 'PUT':
            res.writeHead(200, { 'Content-Type': 'text/plain' })
            res.end(`PUT-запрос обработан`)
            break;
        case 'DELETE':
            res.writeHead(200, { 'Content-type': 'text/plain' });
            res.end(`DELETE-запрос обработан`)
        default:
            res.writeHead(404, { 'Content-Type': 'text/plain' })
            res.end(`Этот запрос на севрер не допустим`)
            break;
    }

})

const port = 3000
server.listen(port, () => {
    console.log(`Server is running on ${port} port`);

})