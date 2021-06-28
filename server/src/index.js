import 'dotenv/config';
import app from './config/app';
import connectMongoose from './config/mongodb';
import connectRabbit from './config/rabbitmq';

connectMongoose()
    .then(() => app()
        .then(() => connectRabbit())
    );