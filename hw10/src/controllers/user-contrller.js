import jwt from "jsonwebtoken"
import * as userService from "../services/user-service.js"
import validateBody from "../utils/validateBody.js"
import { getToken } from "../utils/tokenUtils.js"
import { updateEmailSchema, updateRoleSchema } from "../validation/user.schema.js"

const { JWT_SECRET } = process.env

export const updateUserEmailController = async (req, res) => {
    const token = getToken(req.headers)
    const { id } = jwt.verify(token, JWT_SECRET)

    await validateBody(updateEmailSchema, req.body)

    const result = userService.updateUserEmail(id, req.body)
    res.json({ message: `Email ${result} has been changed` })
}

export const deleteUserController = async (req,res) => {
    const token = getToken(req.headers)
    const { id } = jwt.verify(token, JWT_SECRET)

    await userService.deleteUser(id)
    res.json({ message: `User has been deleted successfully` })

}

export const updateRoleController = async (req, res) => {
    await validateBody(updateRoleSchema, req.body)

    const result = await userService.updateRole(req.body)

    res.json({ message: `Role has been successfully changed to ${result}` })
}

export const refreshTokenController = async (req, res) => {
    const token = getToken(req.headers)
    const { id } = jwt.verify(token, JWT_SECRET)

    const newToken = jwt.sign(id, JWT_SECRET, { expiresIn: "24h" })
    res.json({ newToken })
}