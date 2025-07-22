import * as http from "http"

const server = http.createServer((req, res) => {
    const authHeader = req.headers["authorization"]

    if (authHeader) {
        res.writeHead(200, { 'Content-Type': 'text/plain' })
        res.end('Authorized')
    }
    else {
        res.writeHead(401, { 'Content-Type': 'text/plain' })
        res.end('Unauthorized')
    }
})

const port = 3000
server.listen(port, () => {
    console.log(`Server is running on ${port} port`);

})
