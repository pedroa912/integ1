const express = require('express');
const router = express.Router();
const productController = require('../controllers/celularesController');


router.get('/detalle/:id', productController.show);

router.get('/add', productController.add);

router.get('/resultados-de-busqueda', productController.resultadosBusqueda);


//router.get('/productos/modelo/:id', productController.index);


module.exports = router