import { Sequelize, SequelizeOptions } from 'sequelize-typescript';

import { userModel } from 'models/User/User';

const sequelizeOptions: SequelizeOptions = {
    host: 'localhost',
    port: 5432,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    dialect: 'postgres',
};

export const sequelize = new Sequelize(sequelizeOptions);

export const User = sequelize.define('User', userModel, {});

export async function dbConnect() {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
