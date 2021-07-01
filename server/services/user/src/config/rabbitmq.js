import amqp from 'amqplib';
import userTopics from './topics/user-topics';

const RABBITMQ_URL = process.env.RABBITMQ_URL;
const RABBITMQ_PORT = process.env.RABBITMQ_PORT;
const USERS_QUEUE = process.env.USERS_QUEUE;
const EXCHANGE = process.env.EXCHANGE;
// const QUEUE_KEY = process.env.QUEUE_KEY;


const createQueue = async key => {
    const { queue } = await channel.assertQueue('', { durable: false, exclusive: true });
    // topics[key] = queue;
    return channel.bindQueue(queue, EXCHANGE, key);
}

const connect = async () => {
    const connection = await amqp.connect(`${RABBITMQ_URL}:${RABBITMQ_PORT}`);
    channel = await connection.createChannel();
    await channel.assertExchange(EXCHANGE, 'topic', { durable: false });
    await Promise.all(Object.values(userTopics).map(createQueue))
    
    console.log('Connected to Rabbit');
}

export let channel;

// export let topics = {};

export const publish = (key, payload = {}) => channel.publish(EXCHANGE, key, Buffer.from(JSON.stringify(payload)));

export const consume = func => channel.consume(USERS_QUEUE, async message => {
    await func({ message, content: JSON.parse(message.content.toString()) });
    channel.ack(message);
}, { noAck: false })

export default connect;
