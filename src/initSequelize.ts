import { Sequelize, SequelizeOptions } from 'sequelize-typescript';

import { userThemeModel } from 'models/UserTheme/model';
import { userModel } from 'models/User/model';

const sequelizeOptions: SequelizeOptions = {
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    dialect: 'postgres',
};

export const sequelize = new Sequelize(sequelizeOptions);

export const User = sequelize.define('User', userModel, {});
export const UserTheme = sequelize.define('UserTheme', userThemeModel, {});
UserTheme.belongsTo(User);

export async function dbConnect() {
    try {
        await sequelize.authenticate();
        await sequelize.sync();

        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
