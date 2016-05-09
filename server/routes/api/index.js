var express = require('express');
var router = express.Router();

router.use('/report', require('./report'));

module.exports = router;