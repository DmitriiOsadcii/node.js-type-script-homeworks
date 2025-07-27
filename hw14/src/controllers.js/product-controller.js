import * as ProductService from "../services/product-service.js"

import { addProductSchema } from "../validation/productSchema.js"

import validateBody from "../utils/validateBody.js"

import HttpExeption from "../utils/HttpExeption.js"

export const addProductController =async (req,res)=>{
    await validateBody(addProductSchema, req.body)
    const result  = await ProductService.addProductService(req.body)
    if(!result) throw HttpExeption(400, `Something is missing`)
    res.status(201).json(result)
}

export const getProductsAllController = async(req,res)=>{
    const result = await ProductService.getProductAll()
    res.json(result)
}