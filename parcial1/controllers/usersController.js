const data = require("../db/celularesDatos")

const usersController = {
   register : function (req, res) {
       return res.render('register')
   },
   login : function (req, res) {
       return res.render('login')
   },
   profile: function(req,res){
    return res.render('profile',{producto: data.usuario, usuario: data.usuario, logueado: true})},
    profileEdit: function(req,res){
        res.render('profile-edit', {productos: data.productos, usuario: data.usuario, logueado: true})
   
    },
};

module.exports = usersController;