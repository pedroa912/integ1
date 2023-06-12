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
        },
        createdAt: {
            type: dataTypes.DATE
        },
        updatedAt: {
            type: dataTypes.DATE
        }
    }

    let config = {
        tablename: "usuarios",
        timestamps: true,
        underscorded: true,
    }

    let usuario = sequelize.define(alias,cols,config)

    usuario.associate = function(models){
        usuario.hasMany(models.Comentario, {
            as: "comentario_usuario",
            foreignKey: "id_usuario",
        })

        usuario.hasMany(models.Producto, {
            as: "producto",
            foreignKey: "id_usuario"
        })
    }
    return usuario
}