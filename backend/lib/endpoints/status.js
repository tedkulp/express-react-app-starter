const router = require('express').Router();

router.get('/status', (req, res) => {
    res.send('OK');
});

module.exports = router;
