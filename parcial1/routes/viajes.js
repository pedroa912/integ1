const express = require('express');
const router = express.Router();
const productController = require('../controllers/viajesController');


router.get('/', productController.index);

router.get('/viaje/:id', productController.lugar);

//router.get('//:genero', productController.genero);



module.exports = router