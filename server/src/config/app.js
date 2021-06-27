import express from 'express';
import cors from 'cors';

const PORT = process.env.PORT;

const app = () => {
    const app = express();

    app.use(cors())
    app.get('/', ({ }, res) => res.send('Hello World'));

    app.listen(PORT, () => console.log(`listening on port ${PORT}`));
}

export default app;