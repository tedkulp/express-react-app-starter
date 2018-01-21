const router = require('express').Router();
const auth = require("../auth")();
const jwt = require("jwt-simple");

router.get('/status', (req, res) => {
    res.send('OK');
});

router.get('/protected', auth.authenticate(), (req, res) => {
    res.send('OK');
});

module.exports = router;
