var express = require('express');
const indexController = require('../controllers/indexController.js');
var router = express.Router();

/* GET home page. */
router.get('/', indexController.index);

module.exports = router;

