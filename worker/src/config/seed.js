import 'dotenv/config';
import addUserCountSeed from '../jobs/add-user-count/seed';
import connect from './mongodb';

const seed = async () => {
    await connect();
    await addUserCountSeed();

    console.log('Seeding complete');
}

seed()