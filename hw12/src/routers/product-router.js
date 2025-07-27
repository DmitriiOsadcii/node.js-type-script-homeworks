import { Router } from "express";

import { addProductController, deleteProductController, getProductByIdController, getProductsAllController, updateProductController } from "../controllers/product-controller.js"

const productRouter = Router()

productRouter.post('/', addProductController);

productRouter.get('/', getProductsAllController);

productRouter.get('/:id', getProductByIdController);

productRouter.put('/:id', updateProductController);

productRouter.delete('/:id', deleteProductController);

export default productRouter;
