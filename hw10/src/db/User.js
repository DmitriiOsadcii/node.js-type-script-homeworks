import { DataTypes } from "sequelize";
import sequelize from "./sequelize.js";
import { emailValidation, passwordValidation } from "../constants/user-constants.js";

const User = sequelize.define(
    'user',
    {
        username: {
            type: DataTypes.STRING,
            allowNull: null,
        },
        email: {
            type: DataTypes.STRING,
            unique: {
                args: true,
                msg: "User with this email already exists"
            },
            allowNull: false,
            validate: {
                is: {
                    args: emailValidation.value,
                    msg: emailValidation.message,
                }
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: null,
            validate: {
                is: {
                    args: passwordValidation.value,
                    msg: passwordValidation.message
                }
            }
        },
        role: {
            type: DataTypes.STRING,
            defaultValue: "user",
            allowNull: false,
            validate: {
                isIn: {
                    args: {
                        args: [["superadmin,", "admin", "user"]],
                        msg: "Role can be only admin, usr or useradmin"
                    }
                }
            }
        }
    }
)

User.sync({ alter: true })

export default User;