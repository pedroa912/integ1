const data = require('../db/celularesDatos');
const db = require('../database/models');
let op = db.Sequelize.Op;

const productController = {
      show: (req, res) => {
        let id = req.params.id;
        console.log(id);
       let rel = {include: [ {association: "usuario"},  {association: "comentario", include: [{association: "usuario"} ]  } ]}
        
        db.Producto.findByPk(id, rel)
        .then(function(result){
            console.log(result);
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
    comentarioStore : (req, res) => {
        let formulario = req.body
        let id = req.params.id
        console.log(req.session.user);
        let comentarioNuevo = {
            texto: formulario.texto,
            id_usuario: req.session.user.id,//req.session.user.id, tengo que poner la session bien para que funcione esto asi que no puedo todavbia pero ya anda todo.
            id_producto: req.params.id
        }
        //return res.send(comentarioNuevo)
        // if (req.session.user != null) {
             db.Comentario.create(comentarioNuevo)
             .then((result) => {
                 return res.redirect("/productos/detalle/" + id);
           })
           .catch((err) => {
             console.log(err);
           });
        
    }
    };
module.exports = productController;