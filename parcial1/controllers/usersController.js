const db = require("../database/models");

const usersController = {
    register: function (req, res) {
        return res.render('register')
    },
    login: function (req, res) {
        return res.render('login')
    },
    show: function (req, res) {
        return res.render('profile', { productos: data.productos, usuario: data.usuario, logueado: true })
    },
    profileEdit: function (req, res) {
        res.render('profile-edit', { usuario: data.usuario, logueado: true })

    },
    store: function (req, res) {
        let info = req.body;

        let userSave = {
            mail: info.email,
            contrasenia: info.contrasenia,
            fotoPerfil: info.foto_de_perfil,
            fecha: info.fecha_de_nacimiento,
            dni: info.dni
        }

        db.usuario.create(userSave)
        .then(function (result) {
            
        })
        .catch(function (error) {
            console.log(error);
        })

        return res.redirect('/users/login')
    },
    loginPost: function(req, res) {
        return res.redirect('/users/profile')
    }

};

module.exports = usersController;