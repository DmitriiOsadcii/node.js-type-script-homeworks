import { Router } from "express";
import { authenticateJWT, isAdmin } from "../middlewares/authorization.js";
import { deleteUserController, refreshTokenController, updateRoleController, updateUserEmailController } from "../controllers/user-contrller.js"

const userRouter = Router()

userRouter.put("/update-role", authenticateJWT, isAdmin, updateRoleController)

userRouter.put("/email-update", authenticateJWT, updateUserEmailController)

userRouter.delete("/delete-user", authenticateJWT, deleteUserController)

userRouter.get("/token-update", authenticateJWT, refreshTokenController)


export default userRouter