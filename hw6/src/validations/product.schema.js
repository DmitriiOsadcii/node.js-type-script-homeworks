import * as Yup from "yup"

export const productAddSchema = Yup.object({
    name: Yup.string().required(),
    price: Yup.string().min(0).required()
})

export const productUpdateSchema = Yup.object({
    name: Yup.string(),
    price: Yup.string().min(0)
})