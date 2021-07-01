import { AsyncRouter } from "express-async-router";
import { createUser, getUsers } from "./controller";

const router = AsyncRouter();

router.get('/', getUsers);
router.post('/', createUser)

export default router;