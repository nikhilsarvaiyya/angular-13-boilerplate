var router = require('express').Router();

router.get('/', function (req, res) {
    res.redirect('/api');
});

module.exports = router