import jwt from "jsonwebtoken"

import User from "../db/User.js"
import HttpExeption from "../utils/HttpExeption.js"

const { JWT_SECRET } = process.env

export const updateUserEmail = async (id, { newEmail }) => {
    const user = await User.findByPk(id)
    if (!user) throw HttpExeption(404, "User not found with this id")
    if (newEmail === user.email) throw HttpExeption(400, "New password must not be the same as current one")

    user.email = newEmail
    await user.save()
    return user.email
}

export const deleteUser = async (id) => {
    const user = await User.findByPk(id)
    if (!user) throw HttpExeption(404, "User not found")

    user.deleteOne()
    return true
}

export const updateRole = async ({ id, newRole }) => {
    const user = await User.findByPk(id)
    if (!user) throw HttpExeption(404, "User is not found with this id")
    if (user.role === newRole) throw HttpExeption(400, "New Role must be different")

    user.role = newRole
    await user.save()
    return user.role
}

export const updateToken = async (id) => {
    const user = User.findByPk(id)
    if (!user) throw HttpExeption(404, "User with this id is not found")
    const payload = {
        id: user.id
    }
    const token = jwt.sign(payload, JWT_SECRET, { expressIn: '24h' })
    return token
}