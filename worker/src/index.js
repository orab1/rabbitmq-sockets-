import 'dotenv/config';
import connectMongoose from "./config/mongodb";
import connectRabbit from "./config/rabbitmq";
import consume from './jobs';

connectMongoose().then(() => connectRabbit().then(() => consume()))