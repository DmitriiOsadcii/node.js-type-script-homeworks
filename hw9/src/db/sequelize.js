import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
    dialect: process.env.DATABASE_DIALECT,
    database: process.env.DATABASE_NAME,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        }
    }
})


export const connectDatabase = async () => {
    try {
        await sequelize.authenticate()
        console.log(`Successfully connected to database`);
    } catch (error) {
        console.log(`Error connected to database `, { message: error.message });
        throw error;
    }
}

export default sequelize;