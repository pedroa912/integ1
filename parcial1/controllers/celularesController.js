const celulares = require('../db/celularesDatos');

const celularesController = {
    index : function(req, res) {
        return res.render('products', {
            lista: celulares.lista,
            mensaje: "Todos los celulares",
            x : true
        });
    },
    marcas :function(req, res) {
        let brand = req.params.brand;
        let resultado = [];
    
        for (let i = 0; i < autos.lista.length; i++) {
            if (brand == autos.lista[i].marca) {
                resultado.push(autos.lista[i])
            }
        }
    
        if (resultado.length == 0) {
            return res.send('No hay datos para la marca ' + brand);
        } else {
            return res.send(resultado);
        }
    },
    'modelos' : function () {
        
    },
   'comentarios' : function () {
        
    }






}

module.exports = celularesController