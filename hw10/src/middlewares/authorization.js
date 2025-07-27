import jwt from "jsonwebtoken"
import HttpExeption from "../utils/HttpExeption.js"
import User from "../db/User.js"

const { JWT_SECRET } = process.env;

export const authenticateJWT = async (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) throw HttpExeption(401, "Authorization header is missing")

    const [bearer, token] = authorization.split(" ");
    if (bearer !== "Bearer") throw HttpExeption(401, "User not found");
    try {
        const { id } = jwt.verify(token, JWT_SECRET)
        const user = User.findByPk(id)
        if (!user) throw HttpExeption(404, `User with ${id} id is not found`)
        req.user = user;
        next();
    } catch (error) {
        throw HttpExeption(401, error.message)

    }
}

export const isAdmin = async (req, res, next) => {
    if (req.user.role !== "superadmin" && req.user.role !== "admin")
        throw HttpExeption(403, "Not allow")
    next()
}