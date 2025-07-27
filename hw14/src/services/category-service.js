import Category from "../db/Category.js";

export const addCategory = payload => Category.create(payload)

export const getCategory = () => Category.find()