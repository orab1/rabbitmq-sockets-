import mongoose from 'mongoose';

const DB_PORT = process.env.DB_PORT;
const DB_URL = process.env.DB_URL;
const DB_NAME = process.env.DB_NAME;

const connect = async () => {
    await mongoose.connect(`${DB_URL}:${DB_PORT}/${DB_NAME}`, {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true,
        useUnifiedTopology: true
    });

    console.log('Connected to db');
}

export default connect;