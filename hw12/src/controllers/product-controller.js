import * as productService from "../services/product-server.js"

import validateBody from "../utils/validateBody.js"
import HttpExeption from "../utils/HttpExeption.js"

import { addProductSchema, updateProductSchema } from "../validation/productSchema.js"

export const addProductController = async (req, res) => {
    await validateBody(addProductSchema, req.body)

    const result = await productService.addProduct(req.body)
    res.status(201).json(result)

}
export const getProductsAllController = async (req, res) => {
    const result = await productService.getProductAll()
    res.json(result)

}
export const getProductByIdController = async (req, res) => {
    const { id } = req.params
    const result = await productService.getProductById(id)
    if (!result) throw HttpExeption(404, `Product with ${id} id is not found`)
    res.json(result)
}
export const updateProductController = async (req, res) => {
    await validateBody(updateProductSchema, req.body)
    const { id } = req.params
    const result = await productService.updateProduct(id, req.body)
    if (!result) throw HttpExeption(404, `Product with ${id} id is not found`)
    res.json(result)

}

export const deleteProductController = (req, res) => {
    const { id } = req.params;
    const result = productService.deleteProduct(id);
    if (!result) throw HttpExeption(404, `Product with id=${id} not found`);
    res.json(result);
};