import 'dotenv/config';
import app from './config/app';
import connect from './config/mongodb';

connect().then(() => app());