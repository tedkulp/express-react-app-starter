import mongoose from '../database';

export interface IUser {
    name: number;
    username: string;
    password: string;
    admin?: boolean;
    location?: string;
};

export interface IUserModel extends IUser, mongoose.Document {};

export const userSchema: mongoose.Schema = new mongoose.Schema(
    {
        name: String,
        username: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        admin: Boolean,
        location: String,
    },
    {
        timestamps: true,
        collection: 'users'
    }
);

export const userModel: mongoose.Model<IUserModel> = mongoose.model<IUserModel>(
    'UserModel',
    userSchema
);

export {
    userModel as model,
    userSchema as schema,
};
