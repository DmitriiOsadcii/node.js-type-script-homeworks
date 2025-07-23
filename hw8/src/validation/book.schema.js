import * as Yup from "yup"

export const bookAddSchema = Yup.object({
    title: Yup.string().required("The book title is required"),
    author: Yup.string().required("Author is required"),
    year: Yup.number().integer("Year must be a whole number").required("Year is required")
}).noUnknown(true, ({ data }) => `Unknow field ${data}`)

export const bookUpdateSchema = Yup.object({
    title: Yup.string(),
    author: Yup.string(),
    year: Yup.number().integer("Year must be a whole number")
}).noUnknown(true, ({ data }) => `Unknow field ${data}`)