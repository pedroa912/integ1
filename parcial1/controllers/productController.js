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
                productoInfo: result
                        });

        })
        .catch (function(error){
            console.log(error);
        });
    }, 
    add: function (req, res) {
        return res.render('product-add', {
            usuario: data.usuario
        });
    },
    resultadosBusqueda: function(req,res){
        let productoSearch = req.query.search
        let filtrado = {
            where: {
                [op.or]: [
                    {nombre: {[op.like]: `%${productoSearch}%`}}, 
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
            res.render('search-results', {
                productos: productos
            })
        })
        .catch(function(error) {
            console.log(error);
        })
    },
    store : (req, res) => {
        let info = req.body;
        let comentarioNuevo = {
            nuevo: info.comentarioNuevo,
            productoId: req.params.id,
            usuarioComentando: req.session.usuario.id
        }
        db.comentario.create(comentarioNuevo, [['createdAt', 'DESC']])
          .then((result) => {
            return res.redirect("/producto/detalle/" + productoId);
          })
          .catch((err) => {
            console.log(err);
          });
    }
    };
module.exports = productController;