const express = require('express');
const router = express.Router();
const productController = require('../controllers/celularesController');


router.get('/', productController.index);

//router.get('//:genero', productController.genero);



module.exports = router