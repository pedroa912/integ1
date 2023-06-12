const data = require('../db/celularesDatos');
const db = require('../database/models');
let op = db.Sequelize.Op;

const productController = {
    index: function (req, res) {
        return res.render('product', {
            productos: productos, 
            usuario: usuarios, 
            logueado: true
        })
    },
    show: (req, res) => {
        let id = req.params.id;
        let rel = [
            {association: "comentario_producto", include: "comentario_usuario" },
            {association: "usuario_producto"}]
        
        db.Comentario.findByPk(id, rel)
        .then(function(result){
            for (let i = 0; i < producto.length; i++) {
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
        let relaciones = {
            where: {
                [op.or]: [{nombre: {[op.like]: `%${productoSearch}%`}}, 
                {descripcion: {[op.like]: `%${productoSearch}%`}}
            ]},
            include:[
                {association: "comentario_producto", include: "comentario_usuario" },
                {association: "usuario_producto"}
            ]
            //order: [["createdAt", "DESC"]]
        }
        db.Producto.findAll(relaciones)
        .then(function(productos){
            if (productos && productos.length > 0) {
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
module.exports = productController;