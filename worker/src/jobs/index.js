import { channel } from "../config/rabbitmq"
import addUserCount from "./add-user-count";

const USERS_QUEUE = process.env.USERS_QUEUE;

export default () => channel.consume(USERS_QUEUE, addUserCount, { noAck: false });