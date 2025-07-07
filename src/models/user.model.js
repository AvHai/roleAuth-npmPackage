import mongoose from 'mongoose';
import { use } from 'react';
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    name:{ type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone:{ type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: [String], default: [] }
});
const User = mongoose.model('User', userSchema);
export default User;