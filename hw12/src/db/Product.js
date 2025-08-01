import { Schema, model } from "mongoose";
import { number } from "yup";

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        unique: true
    },
    price: {
        type: Number,
        min: 0,
        required: true
    },
    description: {
        type: String,
        minlength: 10,
        required: true,
    }
}, { versionKey: false, timestamps: true })

const Product = model("product", ProductSchema)

export default Product;