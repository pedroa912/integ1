const db = require('../database/models');

let indexController = {
    index: (req, res) => {
    db.Producto.findAll({
      order : [['createdAt','DESC']],
      include: [{association: 'usuario'}]
    })
      .then(function(result) {
        return res.render('index', {
          productoIndex : result
        })


      }).catch (function(error){
        console.log(error);
      });
    },
};

module.exports = indexController;