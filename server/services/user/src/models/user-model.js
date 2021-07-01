import { Schema, model, Types } from "mongoose";

const { ObjectId } = Types;

const userSchema = new Schema({
    name: {
        type: String
    },
    age: {
        type: Number
    },
    friends: [{
        type: ObjectId,
        ref: 'User'
    }]
})

export default model('User', userSchema);