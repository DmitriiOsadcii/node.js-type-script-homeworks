import { Router } from "express";

import { addUserController, changeUserEmailController, changeUserPasswordController, deleteUserController, getAdminsController } from "../controllers/user-controller.js";

import { authenticate, isAdmin } from "../middlewares/authorization.js";
import { mustChangePassword } from "../middlewares/mustChangePassword.js";

const userRouter = Router()

userRouter.get('/admin', authenticate, mustChangePassword, isAdmin, getAdminsController)

userRouter.post('/register', addUserController)

userRouter.put('/change-password', authenticate, changeUserPasswordController)
userRouter.put('/change-email', authenticate, changeUserEmailController)

userRouter.delete('/delete-account', authenticate, mustChangePassword, deleteUserController)

export default userRouter;
