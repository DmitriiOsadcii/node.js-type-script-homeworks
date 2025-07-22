import { Router } from "express";

import Product from "./db/Product.js";
import { productAddSchema, productUpdateSchema } from "./validations/product.schema.js";

const productRouter = Router()

productRouter.get('/', async (req, res) => {
    const result = await Product.findAll()
    res.json(result)
})

productRouter.get('/:id', async (req, res) => {
    const { id } = req.params
    const result = await Product.findByPk(id)

    if (!result) {
        return res.status(404).json({ message: `Product with ${id} id is not existing` })
    }
    res.json(result)
})

productRouter.post('/', async (req, res) => {
    try {
        await productAddSchema.validate(req.body);
        const result = await Product.create(req.body)
        res.status(201).json(`Product successfully added`)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

export default productRouter