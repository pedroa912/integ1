const celulares = require("../db/celularesDatos")

const indexController = {
    index: function(req, res, next) {
      return res.render('index', {
        producto: celulares,
        logueado: false
      })
    },
}

module.exports = indexController;