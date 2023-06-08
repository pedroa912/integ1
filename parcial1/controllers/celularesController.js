const data = require('../db/celularesDatos');
const db = require('../database/models');
let op = db.Sequelize.Op;

const celularesController = {
    show: (req, res) => {
        let id = req.params.id;

        db.Comentario.findByPk(id)
        .then(function(result){
            for (let i = 0; i < result.length; i++) {
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
        let productoSearch = req.query.search
        db.Producto.findAll({
            include:[
                {association: "comentario_producto", include: "comentario_usuario" },
                {association: "usuario_producto"}
            ],
            where: {
                [op.or]:[{nombre: {[op.like]: `%${productoSearch}%`}}, 
                {descripcion: {[op.like]: `%${productoSearch}%`}}
            ]},
            order: [["createdAt", "DESC"]]
        })
        .then(function(productos){
            if (productos.length > 0) {
                 res.render('search-results', {
                    productos: productos,
                    cantidad_comentarios: productos.comentario_producto
                 })
            } else {
                return res.send("No hay resultados para su criterio de búsqueda")
            }
        })
        .catch(function(error) {
            console.log(error);
        })
    }
};
module.exports = celularesController;