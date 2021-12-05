import { User } from 'initSequelize';

export async function createUser(firstName: string, lastName: string) {
    return User.create({ firstName, lastName });
}

export async function getUserById(id: number) {
    return User.findOne({ where: { id } });
}
