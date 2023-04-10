const celulares = require("../db/celularesDatos")
const users = require("../db/usuario")

const usersController = {
   register : function (req, res) {
       return res.render('register')
   },
   login : function (req, res) {
       return res.render('login')
   },
   profile: function(req,res){
    return res.render('profile',{producto: celulares, usuario: users, logueado: true})},
    profileEdit: function(req,res){
        res.render('profile-edit', { celulares: celulares.usuario, usuario: users, logueado: true})
   
    },
};

module.exports = usersController;