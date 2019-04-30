const express = require('express');
const { createServer } = require('http');

const PORT = process.env.PORT || 3000;

const app = express();
const http = createServer(app);
const io = require('./io')(http);

const start = () => {
    http.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
};

module.exports = {
    app,
    http,
    io,
    start,
};
