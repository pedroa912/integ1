const data = require('../db/celularesDatos');
const db = require("../database/models");
const usuario = db.Usuario;
const bcrypt = require('bcryptjs');

const usersController = {
    register: function (req, res) {
        return res.render('register')
    },
    login: function (req, res) {
        return res.render('login')
    },
    show: function (req, res) {
        return res.render('profile', { 
            productos: data.productos, 
            usuario: data.usuario, 
            logueado: true })
    },
    profileEdit: (req, res) => {
        res.render('profile-edit', { 
            usuario: data.usuario, 
            logueado: true })

    },
    store: function (req, res) {
        let info = req.body;

        let userSave = {
            mail: info.email,
            contrasenia: info.contrasenia,
            nombre: info.nombre,
            fotoPerfil: bcrypt.hashSync(info.contrasenia, 10),
            fecha: info.Fecha_de_nacimiento,
            dni: info.Documento
        };

        usuario.create(userSave)
        .then(function (result) {
            
        })
        .catch(function (error) {
            console.log(error);
        })

        return res.redirect('/users/login')
    },
    loginPost: function(req, res) {

        let emailpedido = req.body.email;
        let contra = req.body.contrasenia;

        db.usuario.findOne()
        .then((result) => {

        }).catch((error) => {
                console.log(error);
        });


        return res.redirect('/perfil');
    }

};

module.exports = usersController;