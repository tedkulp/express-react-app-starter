// const jwt = require('jwt-simple');

const router = require('express').Router();
const auth = require('../auth')();

router.get('/status', (_req, res) => {
    res.send('OK');
});

router.get('/protected', auth.authenticate(), (_req, res) => {
    res.send('OK');
});

module.exports = {
    router,
};
