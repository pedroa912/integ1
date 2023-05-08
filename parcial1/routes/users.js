var express = require('express');
var router = express.Router();
let usuariosController = require('../controllers/usersController')


router.get('/perfil', usuariosController.show)

router.get('/edit', usuariosController.profileEdit);

router.get('/register', usuariosController.register);

router.get('/login', usuariosController.login);


module.exports = router;
