module.exports = (sequelize, dataTypes) => {

    let alias = "Producto"
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
        },
        createdAt: {
            type: dataTypes.DATE
        },
        updatedAt: {
            type: dataTypes.DATE
        }
    };

    let config = {
        tablename: "productos",
        timestamps: true,
        underscorded: true,
    };

    let Producto = sequelize.define(alias, cols, config)

    Producto.associate = (models) => {
        Producto.belongsTo(models.Usuario, {
            as: "usuario",
            foreignKey: "id_usuario"
        })

        Producto.hasMany(models.Comentario, {
            as: "comentario",
            foreignKey: "id_producto"
        })
    };

    return Producto
};