const data = require('../db/celularesDatos');
const db = require('../database/models');
const Usuario = db.Usuario; //Alias del modelo
const producto = db.Producto;
const comentario = db.Comentario;
let op = db.Sequelize.Op;

const celularesController = {
    show: (req, res) => {
        let id = req.params.id;

        let rel = {
            includes: [
              {association: "comentario_usuario" , includes : [{association: "comentario_usario"}]}
            ]
          }

        producto.findByPk(id, rel)
            .then(function(result){
                console.log(result);
                return res.render("product",{
                    columnas : result, 
                    logueado: true});
        })
        .catch (function(error){
            console.log(error);
        });
    }, 
    add: function (req, res) {
        return res.render('product-add', {
            usuario: data.usuario, 
            logueado: true});
    },
    resultadosBusqueda: function(req,res){
        res.render('search-results', {
            productoSearch: data.productos,
             comentarios: data.comentarios});
    }
};
module.exports = celularesController;