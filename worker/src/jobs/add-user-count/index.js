import { channel } from "../../config/rabbitmq";
import UsersCount from './model';

export default async message => {
    const user = JSON.parse(message.content.toString());
    console.log(user._id);

    const count = await UsersCount.findOne({});
    count.usersCount++;
    count.save();

    channel.ack(message);
}