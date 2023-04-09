const celulares = require("../db/celularesDatos")

const indexController = {
    index: function(req, res) {
      res.render('index', {
        producto: celulares,
        logueado: false
      })
    },
};

module.exports = indexController;