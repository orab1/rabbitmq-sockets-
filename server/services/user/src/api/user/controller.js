import { channel, publish } from '../../config/rabbitmq';
import User from '../../models/user-model';

const USERS_QUEUE = process.env.USERS_QUEUE;

export const getUsers = () => User.find({}).populate('friends');

export const createUser = async ({ body: user }) => {
    const newUser = await User.create(user);

    await publish('new.user', newUser);

    return newUser;
}