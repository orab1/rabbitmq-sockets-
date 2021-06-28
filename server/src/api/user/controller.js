import { channel } from '../../config/rabbitmq';
import User from './model';

const USERS_QUEUE = process.env.USERS_QUEUE;

export const getUsers = () => User.find({}).populate('friends');

export const createUser = async ({ body: user }) => {
    const newUser = await User.create(user);

    await channel.sendToQueue(USERS_QUEUE, Buffer.from(JSON.stringify(newUser)))

    return newUser;
}