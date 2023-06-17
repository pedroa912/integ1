/* const data = require('../db/celularesDatos'); */
const db = require('../database/models');
let Producto = db.Producto
let op = db.Sequelize.Op;

const productController = {
      show: (req, res) => {
        let id = req.params.id;
        console.log(id);
       let rel = {include: [ 
        {association: "usuario"},
        {association: "comentario", include: {association: "usuario"}}],
        order: [["comentario", "createdAt", "DESC"]]}
        
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
    productoEditar: (req, res) => {
        id = req.params.id
        let productoEditado = {
            nombre: req.body.productoEditado,
            descripcion: req.body.descripcion,
            //imagen: req.file.filename
            id_usuario: req.session.user.id 
        }

        db.Producto.update (productoEditado, {where: {id: id}})
            .then(function (result) {
                return res.redirect ("/productos/detalle" + req.params.id);
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