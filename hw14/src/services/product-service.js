import Product from "../db/Product.js";

export const addProductService = payload=> Product.create(payload)

export const getProductAll =()=> Product.find().populate("category", "name")