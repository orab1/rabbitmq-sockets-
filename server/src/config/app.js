import express from 'express';
import cors from 'cors';
import api from '../api';
import bodyParser from 'body-parser';

const PORT = process.env.PORT;

const app = () => {
    const app = express();

    app.use(bodyParser.json())
    app.use(cors())
    app.use('/', api);

    app.listen(PORT, () => console.log(`listening on port ${PORT}`));
}

export default app;