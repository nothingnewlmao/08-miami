import { Sequelize, SequelizeOptions } from 'sequelize-typescript';

import { userModel } from 'models/User/User';
import { messageModel } from 'models/Message/Message';
import { topicModel } from 'models/Topic/Topic';

const sequelizeOptions: SequelizeOptions = {
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    dialect: 'postgres',
};

export const sequelize = new Sequelize(sequelizeOptions);

export const Topic = sequelize.define('Topic', topicModel, {});

export const User = sequelize.define('User', userModel, {});

export const Message = sequelize.define('Message', messageModel, {});

User.hasMany(Message);
Message.belongsTo(User);

Topic.hasMany(Message);
Message.belongsTo(Topic);

export async function dbConnect() {
    try {
        await sequelize.authenticate();
        await sequelize.sync();

        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
