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
            contrasenia: bcrypt.hashSync(info.contrasenia, 10),
            nombre: info.nombre,
            fotoPerfil: info.fot_de_perfil,
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

        let filtro = {
            where: [
                {email: emailpedido}
            ]
        }

        usuario.findOne(filtro)
        .then((result) => {
            if (result != null) {

                let contracorrecta = bcrypt.compareSync(contra, result.contrasenia);
                
                if(contracorrecta) {
                    return res.redirect('/');
                } else {

                    return res.send('La contraseña es incorrecta');
                }

            }else {
                return res.send('El usuario no existe');
            }


        }).catch((error) => {
                console.log(error);
        });


        // return res.redirect('/perfil');
    }

};

module.exports = usersController;