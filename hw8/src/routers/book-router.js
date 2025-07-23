import { Router } from "express";
import { addBookController, deleteBookController, getBooksByIdController, getBooksController, updateBookController } from '../controllers/books-controller.js'

const bookRouter = Router()

bookRouter.get("/", getBooksController);
bookRouter.get("/:id", getBooksByIdController);
bookRouter.post('/', addBookController);
bookRouter.put("/:id", updateBookController);
bookRouter.delete('/:id', deleteBookController);

export default bookRouter;