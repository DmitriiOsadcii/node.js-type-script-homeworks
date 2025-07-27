import * as CategoryService from "../services/category-service.js"

import { addCategorySchema } from "../validation/categorySchema.js"

import validateBody from "../utils/validateBody.js"
import HttpExeption from "../utils/HttpExeption.js"

export const addCategoryController = async (req, res) => {
    await validateBody(addCategorySchema, req.body)
    const result = await CategoryService.addCategory(req.body)
    if (!result) throw HttpExeption(400, `Something is missing`)
    res.status(201).json(result)
}

export const getCattegoryAllController = async (req, res) => {
    const result = await CategoryService.getCategory()
    res.json(result)
}