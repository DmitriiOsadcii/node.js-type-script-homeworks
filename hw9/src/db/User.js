import { DataTypes } from "sequelize";

import sequelize from "./sequelize.js";
import { emailValidation, passwordValidation } from "../constants/user.constants.js";
const User = sequelize.define(
    "user",
    {
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: {
                args: true,
                msh: "User with this email already exists"
            },
            validate: {
                is: {
                    args: emailValidation.value,
                    msg: emailValidation.message
                }
            }

        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                is: {
                    args: passwordValidation.value,
                    msg: passwordValidation.message
                }
            }
        },
        mustChangePassword: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "user",
            validate: {
                isIn: {
                    args: [["admin", "user", "superadmin"]],
                    msg: "Role can be only superadmin, admin or user"
                }
            }
        }
    }
)
User.sync()

export default User;