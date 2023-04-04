const celulares = require('../db/celularesDatos');

const celularesController = {
    index : function(req, res) {
        return res.render('celulares', {
            lista: celulares.lista,
            mensaje: "Todos los celulares",
            x : true
        });
    },
    modelos :function(req, res) {
        let modelos = req.params.modelo;
        let resultado = [];
    
        for (let i = 0; i < celulares.lista.length; i++) {
            if (modelos == celulares.lista[i].modelo) {
                resultado.push(celulares.lista[i])
            }
        }
    
        if (resultado.length == 0) {
            return res.send('No hay datos para el modelo' + modelos);
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