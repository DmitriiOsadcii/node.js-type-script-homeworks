import { Router } from "express";

import { addProductController, getProductsAllController } from "../controllers.js/product-controller.js";

const productRouter = Router()

productRouter.get('/', getProductsAllController)
productRouter.post('/', addProductController)

export default productRouter;
