const express = require('express');
const router = express.Router();
const productController = require('../controllers/viajesController');


router.get('/', productController.index);

//router.get('/viaje/:id', productController.lugar);

//router.get('/comentario/:id', productController.comentario);





module.exports = router