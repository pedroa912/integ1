const data = require('../db/celularesDatos');
const db = require('../database/models');
let op = db.Sequelize.Op;

const productController = {
      show: (req, res) => {
        let id = req.params.id;
        console.log(id);
       let rel = {include: [{association: "usuario", include: "comentario" }]}
        
        db.Producto.findByPk(id, rel)
        .then(function(result){
                    return res.render("product",{
                        productoInfo: result,
                        logueado: true
                        });

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
        let filtrado = {
            where: {
                [op.or]: [{nombre: {[op.like]: `%${productoSearch}%`}}, 
                {descripcion: {[op.like]: `%${productoSearch}%`}}
            ]},
            include:{
                all: true,
                nested: true
            }
            //order: [["createdAt", "DESC"]]
        }
        db.Producto.findAll(filtrado)
        .then(function(productos){
            if (productos.length > 0) {
                res.render('search-results', {
                    productos: productos,
                    cantComentario: productos.comentario
                })
            } else {
                return res.send("No hay resultados para su criterio de búsqueda")
            }
        })
        .catch(function(error) {
            console.log(error);
        })
    },
    // store : (req, res) => {
    //     let info = req.body;
    //     movie
    //       .create(info)
    //       .then((result) => {
    //         return res.redirect("/movies/all");
    //       })
    //       .catch((err) => {
    //         console.log(err);
    //       });
    // }
    };
module.exports = productController;