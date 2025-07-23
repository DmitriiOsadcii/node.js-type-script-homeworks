import * as bookService from "../services/books-service.js"

import ValidateBody from '../utils/ValidateBody.js'
import HttpException from "../utils/HttpException.js"

import { bookAddSchema, bookUpdateSchema } from "../validation/book.schema.js"

export const getBooksController = async (req, res) => {
    const result = await bookService.getBook()
    res.json(result)
}

export const getBooksByIdController = async (req, res) => {
    const { id } = req.params;
    const result = await bookService.getBookById(id)

    if (!result) throw HttpException(404, `Book with ${id} not found`)
    res.json(result)
}

export const addBookController = async (req, res) => {
    await ValidateBody(bookAddSchema, req.body)

    const result = await bookService.addBook(req.body)

    res.status(200).json(result)
}

export const updateBookController = async (req, res) => {
    await ValidateBody(bookUpdateSchema, req.body)

    const { id } = req.params

    const result = await bookService.updateBook(id, req.body)
    if (!result) throw HttpException(404, `Book with ${id} is not found`)

    res.status(200).json(result)
}

export const deleteBookController = async (req, res) => {
    const { id } = req.params;

    const result = await bookService.deleteBook(id)
    if (!result) throw HttpException(404)

    res.json(`${result} has been successfully deleted`)
}