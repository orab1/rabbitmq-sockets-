import { consume } from "../config/rabbitmq"
import addFriend from "./add-friend"

export default async () => {
    await consume(addFriend);
}