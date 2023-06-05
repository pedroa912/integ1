const data = require('../db/celularesDatos');
const db = require('../database/models');
const Usuario = db.Usuario; //Alias del modelo
const producto = db.Producto;
const comentario = db.Comentario;
let op = db.Sequelize.Op;

const celularesController = {
    show: (req, res) => {
        let id = req.params.id;

        comentario.findByPk(id)
        .then(function(result){
            for (let i = 0; i < result.producto.length; i++) {
                if (id == result.producto[i].id) {
                    return res.render("product",{
                        productoInfo: result.producto[i], 
                        comentarios: result.comentarios, 
                        usuario: result.usuario, 
                        logueado: true});
                };
            };
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