import mongoose from '../database';

const userSchema = new mongoose.Schema(
    {
        name: String,
        username: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        admin: Boolean,
        location: String,
    },
    {
        timestamps: {},
    }
);

const user = mongoose.model('User', userSchema);

export {
    user as model,
    userSchema as schema,
};
