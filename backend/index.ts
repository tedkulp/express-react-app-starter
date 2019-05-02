import { createClient } from 'redis';

import app from './lib/app';
import { init as endpointInit } from './lib/endpoints';
import { init as modelInit } from './lib/models';

const redis = createClient({
    host: process.env.DOCKER_REDIS_HOST ? process.env.DOCKER_REDIS_HOST : '127.0.0.1',
    port: process.env.DOCKER_REDIS_PORT ? parseInt(process.env.DOCKER_REDIS_PORT, 10) : 6379,
});

endpointInit(app.app);
modelInit();

app.start();

export default {
    app,
    redis,
};
