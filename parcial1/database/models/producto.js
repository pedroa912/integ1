module.exports = (sequelize, dataTypes) => {

    let alias = "producto"
    /* 3er paso : Es crear una variable con la extructura de la tabla */
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING
        },
        descripcion: {
            type: dataTypes.STRING
        },
        foto: {
            type: dataTypes.STRING
        },
        id_usuario: {
            type: dataTypes.INTEGER
        }
    }

    let config = {
        tablename: "productos",
        timestamps: true,
        underscorded: true,
    }

    let producto = sequelize.define(alias, cols, config)

    producto.associate = (models) => {
        producto.belongsTo(models.usuario, {
            as: "usuario_producto",
            foreignKey: "id_usuario"
        })

        producto.hasMany(models.comentario, {
            as: "comentario_producto",
            foreignKey: "id_producto"
        })
    }

    return producto
}