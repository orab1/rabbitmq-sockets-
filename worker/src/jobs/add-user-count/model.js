import { Schema, model } from "mongoose";

const usersCountSchema = new Schema({
    usersCount: {
        type: Number,
        default: 0
    }
})

export default model('usersCount', usersCountSchema);