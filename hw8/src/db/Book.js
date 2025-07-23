import sequelize from "./sequelize.js";
import { DataTypes } from "sequelize";

const Book = sequelize.define('books', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
            arg: true,
            msg: "Book already exists"
        }
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false
    },
    year: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
})

Book.sync()

export default Book;