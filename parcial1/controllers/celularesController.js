const celulares = require('../db/celularesDatos');
const data = require('../db/celularesDatos');
const users = require("../db/usuario");

const celularesController = {
    index : function (req, res) {
        return res.render('product', {producto: data, usuario: users, logueado: true})
    },
    show: function (req, res) {
        let id = req.params.id;
        let resultado = [];
    
        for (let i = 0; i < celulares.lista.length; i++) {
            if (id == celulares.lista[i].id) {
                resultado.push(celulares.lista[i])
            }
            else {
                return res.send(resultado);
            }
        }
    }, 
    add: function (req, res) {
        return res.render('product-add', {usuario: users, logueado: true})
    },
    resultadosBusqueda: function(req,res){
        res.render('search-results', {producto: data})
    }
};
module.exports = celularesController;