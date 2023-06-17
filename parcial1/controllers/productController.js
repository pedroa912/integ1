/* const data = require('../db/celularesDatos'); */
const db = require('../database/models');
let Producto = db.Producto;
let op = db.Sequelize.Op;

const productController = {
      show: (req, res) => {
        let id = req.params.id;
        let rel = {
        order: [["comentario", "createdAt", "DESC"]] , 
        include: [ 
        {association: "usuario"},
        {association: "comentario", include: [ {association: "usuario"}, {association:"producto"}]}],
       }
        
        Producto.findByPk(id, rel)
        .then(function(result){
            //res.send(result);
            return res.render("product",{
                productoInfo: result
                        });  

         })
        .catch (function(error){
            console.log(error);
        }); 
    }, 
    add: function (req, res) {

        return res.render('product-add'); 
    },
    productoAgregar: function (req, res) {
      let formulario = req.body;
      let productoNuevo = {
        nombre: formulario.NombreProducto,
        descripcion: formulario.DescripcionProducto,
        foto: formulario.ImagenProducto,
        id_usuario: req.session.user.id,
        createdAt: formulario.FechaCargaProducto
      };
      
      db.Producto.create(productoNuevo)
             .then((result) => {
                 return res.redirect("/");
           })
           .catch((err) => {
             console.log(err);
           });  
    },
    resultadosBusqueda: function(req, res){
        let productoSearch = req.query.search
        let filtrado = {
            where: {[op.or]: [
                    {nombre: {[op.like]: `%${productoSearch}%`}}, 
                    {descripcion: {[op.like]: `%${productoSearch}%`}}
                ]},
            include:{
                all: true,
                nested: true
            },
            order: [["createdAt", "DESC"]]
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
    productoBorrar: (req,res) => {
     // let id_producto = req.body.id;
      criterio = {where: {id: req.params.id}}
      //return res.send(criterio)
      db.Producto.destroy(criterio)
      .then((result) => {
        return res.redirect("/")

      }).catch((err) => {
        console.log(err);
      });
    },
    paginaEditar: function(req,res){
        let id = req.params.id;
        Producto.findByPk(id)
        .then(function(result){
            res.render("product-edit", {productoInfo:result})
        }) 
        
    },
    productoEditar: (req, res) => {

         let productoEditado = {
            nombre: req.body.NombreProducto,
            descripcion: req.body.DescripcionProducto,
            foto: req.body.ImagenProducto,
            id_usuario: req.session.user.id,
            updatedAt: new Date()
        } 

        db.Producto.update(productoEditado, {where: {id: req.params.id}})
            .then(function (result) {
                return res.redirect ("/productos/detalle/" + req.params.id);
            })
            .catch(function(error) {
                console.log(error);
            })
     
    },
    comentarioStore: (req, res) => {
        let formulario = req.body
        console.log(req.session.user);
        let comentarioNuevo = {
            texto: formulario.texto,
            id_usuario: req.session.user.id,//req.session.user.id, 
            id_producto: req.params.id
        }
        //return res.send(comentarioNuevo)
        // if (req.session.user != null) {
             db.Comentario.create(comentarioNuevo)
             .then((result) => {
                 return res.redirect("/productos/detalle/" + id_producto);
           })
           .catch((err) => {
             console.log(err);
           });
        
    }
    };
module.exports = productController;