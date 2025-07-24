import * as Yup from "yup"
import { passwordSchema, emailSchema } from "./fields.schema.js"

export const loginSchema = Yup.object({
    email: emailSchema,
    password: passwordSchema
})