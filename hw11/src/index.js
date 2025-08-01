import express from "express"
import cors from "cors"

const app = express()

app.use(cors())

app.use(express.json())

let products = [

    { id: 1, name: 'Product One', price: 29.99 },

    { id: 2, name: 'Product Two', price: 49.99 },

];

app.get('/products/:id', (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id))
    if (!product) return res.status(404).json({ message: "Product not found" })
    res.json(product)
})

app.get('/products', (req, res) => {
    res.json(products);
});

app.post("/products", (req, res) => {
    const newProduct = {
        id: products.length + 1,
        name: req.body.name,
        price: req.body.price
    }
    products.push(newProduct)
    res.status(201).json(newProduct)
})

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');

})