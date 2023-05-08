const data = require('../db/celularesDatos');

const celularesController = {
    show: function (req, res) {
        let id = req.params.id;
        for (let i = 0; i < data.productos.length; i++) {
            if (id == data.productos[i].id) {
                return res.render("product",{productoInfo: data.productos[i], comentarios: data.comentarios, usuario: data.usuario, logueado: true})
            }
        }
    }, 
    add: function (req, res) {
        return res.render('product-add', {usuario: data.usuario, logueado: true})
    },
    resultadosBusqueda: function(req,res){
        res.render('search-results', {productoSearch: data.productos, comentarios: data.comentarios})
    }
};
module.exports = celularesController;