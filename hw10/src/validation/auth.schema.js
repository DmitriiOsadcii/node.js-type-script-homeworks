import * as Yup from "yup"

import { emailSchema, passwordSchema } from
    "./field.schema.js";

export const loginSchema = Yup.object({
    email: emailSchema,
    password: passwordSchema
});
