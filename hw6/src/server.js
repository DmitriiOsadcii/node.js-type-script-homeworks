import cors from "cors"
import express from 'express'
import productRouter from './products-routers.js'

const app = express()
const port = 3000

const startServer = () => {
    app.use(cors())
    app.use(express.json())

    app.get('/', (req, res) => {
        res.status(200).json({ message: `Hello World!` });
    })

    app.post('/', (req, res) => {
        const { body } = req;
        try {
            if (!body || Object.keys(body).length === 0) {
                return res.status(400).json({ error: 'Need to insert data in body' })
            }
            res.status(200).json(req.body)

        } catch (error) {
            res.status(400).json({ error: 'Invalid request body' })
        }
    })

    app.use('/api/products', productRouter)

    app.use((req, res) => {
        res.status(404).json({ error: 'Invalid URL or route not found' })
    })

    app.listen(port, () => {
        console.log(`Server is running on ${port} port`);

    })
}

export default startServer;