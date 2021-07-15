import 'dotenv/config';
import app from './config/app';
import connectMongoose from './config/mongodb';
import connectRabbit from './config/rabbitmq';
import subscribe from './jobs';
import { userTopics } from '@orab/rabbitmq-server-common';

console.log(userTopics);

connectMongoose()
    .then(() => app()
        .then(() => connectRabbit()
            .then(() => subscribe())
        )
    );