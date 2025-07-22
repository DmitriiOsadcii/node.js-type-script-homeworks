import { DataTypes } from "sequelize";
import sequelize from "./sequelize.js";

const Development = sequelize.define('development', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    size: {
        type: DataTypes.INTEGER,
        allowNull: false,

    },
})
Development.sync()

export default Development;