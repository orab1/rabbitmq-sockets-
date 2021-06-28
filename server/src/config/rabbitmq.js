import amqp from 'amqplib';

const RABBITMQ_URL = process.env.RABBITMQ_URL;
const RABBITMQ_PORT = process.env.RABBITMQ_PORT;
const USERS_QUEUE = process.env.USERS_QUEUE;

export let channel;

const connect = async () => {
    const connection = await amqp.connect(`${RABBITMQ_URL}:${RABBITMQ_PORT}`);
    channel = await connection.createChannel();
    channel.assertQueue(USERS_QUEUE, { durable: false });

    console.log('Connected to Rabbit');
}

export default connect;
