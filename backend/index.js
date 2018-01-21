const fs = require('fs');
const _ = require('lodash');
const Promise = require('bluebird');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const redisClient = require("redis").createClient({
    host: process.env.DOCKER_REDIS_HOST,
    port: process.env.DOCKER_REDIS_PORT,
});

require('./lib/endpoints')(app);
require('./lib/models');

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))
