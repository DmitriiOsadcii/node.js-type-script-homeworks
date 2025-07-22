import * as Yup from "yup"

export const developmentAddSchema = Yup.object({
    name: Yup.string().required(),
    size: Yup.number().min(1).required()
})