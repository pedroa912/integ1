const celulares = require("../db/celularesDatos")

const indexController = {
    index: function(req, res, next) {
      res.render('index', {
        producto: celulares,
        logueado: false
      })
    },
}

module.exports = indexController;