const fs = require('fs');
const _ = require('lodash');
const Promise = require('bluebird');
const app = require('./lib/app');

const redisClient = require("redis").createClient({
    host: process.env.DOCKER_REDIS_HOST,
    port: process.env.DOCKER_REDIS_PORT,
});

require('./lib/endpoints')(app.app);
require('./lib/models');

app.start();
