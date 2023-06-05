const data = require('../db/celularesDatos');
const db = require('../database/models')
const Usuario = db.Usuario; //Alias del modelo
const producto = db.Producto;
const comentario = db.Comentario;
let op = db.Sequelize.Op;

const indexController = {
    index: (req, res) => {
      let todo = {};
      producto.findAll(todo)
      .then(function(result) {
        return res.render('index', {
          productoIndex: result,
          logueado : null});

      }).catch (function(error){
        console.log(error);
      });
    },
};

module.exports = indexController;