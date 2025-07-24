import * as Yup from "yup"
import { emailSchema, passwordSchema } from "./fields.schema.js"

export const addUserSchema = Yup.object({
    username: Yup.string().trim().required(),
    email: emailSchema,
    password: passwordSchema
}).noUnknown(true, ({ data }) => `Unknown field ${data}`)

export const changePasswordSchema = Yup.object({
    oldPassword: passwordSchema,
    newPassword: passwordSchema
}).noUnknown(true, ({ data }) => `Unknown field ${data}`)

export const changeEmailSchema = Yup.object({
    oldEmail: emailSchema,
    newEmail: emailSchema
}).noUnknown(true, ({ data }) => `Unknown field ${data}`)

export const deleteUserSchema = Yup.object({
    password: passwordSchema
}).noUnknown(true, ({ data }) => `Unknown field ${data}`)