const data = require('../db/celularesDatos');

const celularesController = {
    index : function (req, res) {
        return res.render('index', {producto: data})
    },
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
    resultadosBusqueda: function(req,res){
        res.render('search-results')
    },
    show: function (req, res) {
        return res.render('product', {celular: data.lista})
    }
}
module.exports = celularesController;