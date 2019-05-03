import Bluebird from 'bluebird';
import mongoose from 'mongoose';

(mongoose as any).Promise = Bluebird;

mongoose.connect(
    `mongodb://${process.env.DOCKER_MONGODB_HOST || '127.0.0.1'}/${process.env
        .DOCKER_MONGODB_DATABASE || 'example'}`,
    {
        useCreateIndex: true,
        useNewUrlParser: true,
    },
);

export const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected');
});

export default mongoose;
