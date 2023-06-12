const data = require('../db/celularesDatos');
const db = require('../database/models');
const Usuario = db.Usuario; //Alias del modelo
const producto = db.Producto;
const comentario = db.Comentario;
let op = db.Sequelize.Op;

let indexController = {
    index: (req, res) => {
    let rel = {
      order : ['createdAt','DESC'],
      include: [
        {association: 'usuario_producto'},
        //{association: 'comentario_producto'}
      ]
    }
    producto.findAll({
      order : [['createdAt','DESC']],
      include: [{association: 'usuario'}]
    })
      .then(function(result) {
        return res.render('index', {
          productoIndex : result,
          logueado : null
        })


      }).catch (function(error){
        console.log(error);
      });
    },
};

module.exports = indexController;