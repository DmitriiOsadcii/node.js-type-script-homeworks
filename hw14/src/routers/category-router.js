import { Router } from "express";

import { addCategoryController, getCattegoryAllController } from "../controllers.js/category-controller.js";

const categoryRouter = Router()

categoryRouter.get('/', getCattegoryAllController)
categoryRouter.post('/', addCategoryController)

export default categoryRouter;