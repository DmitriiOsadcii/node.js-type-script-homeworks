import HttpExeption from "./HttpExeption.js";

export const getToken = (header) => {
    const { authorization } = header;
    if (!authorization) throw HttpExeption(401, "Authorization header is missing")

    const [bearer, token] = authorization.split(" ");
    if (bearer !== "Bearer") throw HttpExeption
        (401, "Bearer is missing")
    return token
}