import User from './model';

export const getUsers = () => User.find({}).populate('friends');
export const createUser = ({ body: user }) => User.create(user);