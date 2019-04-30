const redis = require('redis');

const app = require('./lib/app');

const redisClient = redis.createClient({
    host: process.env.DOCKER_REDIS_HOST,
    port: process.env.DOCKER_REDIS_PORT,
});

require('./lib/endpoints')(app.app);
require('./lib/models');

app.start();

module.exports = {
    redis,
    redisClient,
};
