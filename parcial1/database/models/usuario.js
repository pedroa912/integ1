module.exports = (sequelize,dataTypes) => {

    let alias = "Usuario"

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        mail: {
            type: dataTypes.STRING
        },
        contrasenia: {
            type: dataTypes.STRING
        },
        nombre: {
            type: dataTypes.STRING
        },
        fotoPerfil: {
            type: dataTypes.STRING
        },
        fecha: {
            type: dataTypes.DATE
        },
        dni: {
            type: dataTypes.INTEGER
        }
    }

    let config = {
        tablename: "usuarios",
        timestamps: true,
        underscorded: true,
    }

    let Usuario = sequelize.define(alias,cols,config)

    Usuario.associate = function(models){
        Usuario.hasMany(models.Comentario, {
            as: "comentario_usuario",
            foreignKey: "id_usuario",
        })

        Usuario.hasMany(models.Producto, {
            as: "producto",
            foreignKey: "id_usuario"
        })
    }
    return Usuario
}