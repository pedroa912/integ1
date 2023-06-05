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