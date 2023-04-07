const data = require('../db/celularesDatos');

const celularesController = {
    // index : function(req, res) {
    //     return res.render('celulares', {
    //         lista: celulares.lista,
    //         mensaje: "Todos los celulares",
    //         x : true
    //     });
    // },
    index : function (req, res) {
        return res.render('index', {celulares: data.lista})
    },
    detalle:  function(req,res) {
        const id= req.params.id;
        
        const celular = db.celular.findByPk(id)
       .then(function (producto) {
        if (producto) {
            console.log(producto);
            res.render('product', {producto});
        } else { 
            res.render('search-results-not-found',{auth})
        }
       })
       .catch(function(error){
        res.send(error);
       })},
    // modelos :function(req, res) {
    //     let modelos = req.params.modelo;
    //     let resultado = [];
    
    //     for (let i = 0; i < celulares.lista.length; i++) {
    //         if (modelos == celulares.lista[i].modelo) {
    //             resultado.push(celulares.lista[i])
    //         }
    //     }
    
    //     if (resultado.length == 0) {
    //         return res.send('No hay datos para el modelo' + modelos);
    //     } else {
    //         return res.send(resultado);
    //     }
    // },
    add: function (req, res) {
        return res.render('product-add')
    },
    show: function (req, res) {
        return res.render('product', {celular: data.lista})
    }
}
module.exports = celularesController