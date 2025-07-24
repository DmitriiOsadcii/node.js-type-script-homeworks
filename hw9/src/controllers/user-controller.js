import jwt from "jsonwebtoken"
import * as userService from "../services/user-service.js"

import validateBody from "../utils/validateBody.js"
import HttpExeption from "../utils/HttpExeption.js"

import { addUserSchema, changeEmailSchema, changePasswordSchema, deleteUserSchema } from "../validation/user.schema.js"
import { emailSchema } from "../validation/fields.schema.js"

const { JWT_SECRET } = process.env;

const getToken = (headers) => {
    const { authorization } = headers;
    if (!authorization) throw HttpExeption(401, "Authorization header is missing")

    const [bearer, token] = authorization.split(" ")
    if (bearer !== "Bearer") throw HttpExeption(401, "Bearer is missing")

    return token
}

export const addUserController = async (req, res) => {
    await validateBody(addUserSchema, req.body)
    const result = await userService.addUser(req.body)
    res.status(201).json({
        message: `User with ${result.email} added successfully`
    })
}

export const changeUserPasswordController = async (req, res) => {
    const token = getToken(req.headers)
    const { id } = jwt.verify(token, JWT_SECRET)

    await validateBody(changePasswordSchema, req.body)

    const result = await userService.changePassword(id, req.body)
    if (!result) throw HttpExeption(404, `User with ${id} id is not found`)

    result.mustChangePassword = false
    await result.save()
    res.json({ message: "Password successfully changed" })
}

export const changeUserEmailController = async (req, res) => {
    const token = getToken(req.headers)
    const { id } = jwt.verify(token, JWT_SECRET)

    await validateBody(changeEmailSchema, req.body)

    const result = await userService.changeEmail(id, req.body)
    if (!result) throw HttpExeption(404, `User with ${id} id is not found`)
    res.json({ message: `Email successfully changed` })
}

export const deleteUserController = async (req, res) => {
    const token = getToken(req.headers)
    const { id } = jwt.verify(token, JWT_SECRET)

    await validateBody(deleteUserSchema, req.body)
    const result = await userService.deleteUser(id, req.body)
    if (!result) throw HttpExeption(404, `User with ${id} is not found`)

    res.json({ messgae: `User successfully deleted` })
}

export const getAdminsController = async (req, res) => {
    const result = await userService.getAdmins()

    res.json(result)
}