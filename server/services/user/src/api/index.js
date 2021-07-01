import { AsyncRouter } from "express-async-router";
import userRoute from './user';

const router = AsyncRouter();

router.use('/users', userRoute);

export default router;