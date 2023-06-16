const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');


router.get('/detalle/:id', productController.show);

router.get('/add', productController.add);

router.get('/resultados-de-busqueda', productController.resultadosBusqueda);

//router.get('/productos', productController.index);

router.post("/comentario/:id", productController.comentarioStore)

router.post("/agregar", productController.productoAgregar)

router.post("/delete", productController.productoBorrar)


module.exports = router;