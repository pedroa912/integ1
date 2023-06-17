const db = require("../database/models");
const bcrypt = require('bcryptjs');

const usersController = {
    show: function (req, res) {
        let id = req.params.id;
        let rel ={
            include: [ 
                {association: "producto"},
                {association: "comentario", include: [ {association: "producto"}, {association:"usuario"}]}],
               };
        db.Usuario.findByPk(id, rel)
        .then(function(result){
            let userCheck = false;
            let userSession = req.session.user;
            if (userSession != null && id == userSession.id){
            res.locals.user = result.dataValues
            userCheck = true
            return res.render("profile",{usuario: result, userCheck: userCheck});
            } else {
                return res.render('profile-search', {usuarioOtro: result});
            }
        })
        .catch(function (error) {
            console.log(error);
        })
    }, 
    register: function (req, res) {
        return res.render('register')
    },
    login: function (req, res) {
        return res.render('login')
    },
    
    profileEdit: (req, res) => {
        if (req.session.user == null){
            return res.redirect("/")
        }
        else {
            let userId = req.session.user.id;
            db.Usuario.findByPk(userId)
            .then(function(result){
                console.log(result)
                return res.render("profile-edit",{user: result})
            })
            .catch(function (error) {
                console.log(error);
            })
        }
    },
    editPost: (req, res) => {
        let info = req.body
        let userId = req.session.user.id

        db.Usuario.update(info, {where : [{id: userId}]})
        .then(function(result){
            console.log(result)
            return res.redirect("/users/id/" + userId)
        })
        .catch(function (error) {
            console.log(error);
        })
    },
    store: function (req, res) {
        let info = req.body;
        let emailpedido = info.mail
        let contra = info.contrasenia.length

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
        let errors = {}

        if (emailpedido == ""){
            errors.message = "El mail esta vacio"
            res.locals.errors = errors
            return res.render("register")
        } else if (contra == "") {
            errors.message = "La contraseña esta vacia"
            res.locals.errors = errors
            return res.render("register")
        } else if (contra <= 3) {
            errors.message = "La contraseña necesita como minimo 3 caracteres"
            res.locals.errors = errors
            return res.render("register")
        }else {
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
        }
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
        let errors = {}

        if (emailpedido == ""){
            errors.message = "El mail esta vacio"
            res.locals.errors = errors
            return res.render("login")
        } else if (contra.length == "") {
            errors.message = "La contraseña esta vacia"
            res.locals.errors = errors
            return res.render("login")
        } else {
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
                    errors.message = "La contraseña es incorrecta"
                    res.locals.errors = errors
                    return res.render('login');
                }
            }else {
                errors.message = "El mail no existe"
                res.locals.errors = errors
                return res.render('login');
            }
        }).catch((error) => {
            console.log(error);
        });
        }
    },
    logout: function(req,res) {
        req.session.destroy()
        res.clearCookie("userId")
        res.redirect("/")
    }
};
module.exports = usersController;