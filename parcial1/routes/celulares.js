const express = require('express');
const router = express.Router();
const productController = require('../controllers/celularesController');


router.get('/productos', productController.index);

router.get('/add', productController.add);

router.get('/celulares', productController.show);

router.get('/resultados-de-busqueda', productController.resultadosBusqueda);


//router.get('/productos/modelo/:id', productController.index);


module.exports = router