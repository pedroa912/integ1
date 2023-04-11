const data = require("../db/celularesDatos")

const indexController = {
    index: function(req, res) {
      res.render('index', {
        productoIndex: data.productos,
        logueado: false
      })
    },
};

module.exports = indexController;