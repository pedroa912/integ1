const data = require('../db/celularesDatos');
const db = require("../database/models");
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
    editPost: (req, res) => {
        res.render('profile-edit', { 
            usuario: data.usuario})

    },
    store: function (req, res) {
        let info = req.body;

        let userSave = {
            mail: info.mail,
            contrasenia: bcrypt.hashSync(info.contrasenia, 10),
            nombre: info.nombre,
            fotoPerfil: info.fot_de_perfil,
            fecha: info.Fecha_de_nacimiento,
            dni: info.Documento,
            create_at: new Date(),
            update_at: new Date()
        };

        db.Usuario.findOne({where:[{mail: info.mail}]})
        .then(function(searchMail){
            if(searchMail == null) {
                db.Usuario.create(userSave)
                return res.redirect('/users/login')
            } else {
                res.send('El mail ya está en uso. Prueba con otro')
            }
        })
        .catch(function (error) {
            console.log(error);
        })
    },
    loginPost: function(req, res) {
        let info = req.body;
        let emailpedido = info.mail;
        let contra = info.contrasenia;

        let filtro = {
            where: [
                {mail: emailpedido}
            ]
        }

        db.Usuario.findOne(filtro)
        .then((result) => {
            if (result != null) {

                let contracorrecta = bcrypt.compareSync(contra, result.contrasenia);//son dos datos, un string y uno que esta hasheado en la base de datos. Este mismo va a tratar de hasear el string para luego compararlo con el de la base de datos, a ver si da igual.
                
                if(contracorrecta) {

                    req.session.user = result.dataValues
                    if (req.body.recordame != undefined) {
                        res.cookie("userId", result.id, {maxAge: 1000 * 60 * 5} );
                    }
                    return res.redirect('/');
                } else {

                    return res.send('La contraseña es incorrecta'); //esto lo tenemos que hacer con errors
                }

            }else {
                return res.send('El usuario no existe');
            }


        }).catch((error) => {
                console.log(error);
        });


        // return res.redirect('/perfil');
    },
    logout: function(req,res) {
        req.session.destroy()
        res.clearCookie("userId")
        res.redirect("/")
    }

};

module.exports = usersController;