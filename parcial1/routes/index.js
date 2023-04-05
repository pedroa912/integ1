var express = require('express');
const celularesController = require('../controllers/celularesController');
var router = express.Router();

/* GET home page. */
router.get('/', celularesController.index)

module.exports = router;

