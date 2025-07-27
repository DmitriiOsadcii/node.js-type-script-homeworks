import * as Yup from "yup"
import { emailSchema, roleSchema, idSchema } from "./field.schema.js"

export const updateEmailSchema = Yup.object({
    newEmail: emailSchema,
}).noUnknown(true, ({ data }) => `Unknow field ${data}`)

export const updateRoleSchema = Yup.object({
    id: idSchema,
    role: roleSchema
}).noUnknown(true, ({ data }) => `Unknown field ${data}`)
