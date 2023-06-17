module.exports = (sequelize, dataTypes) => {

    let alias = "Comentario"

    let cols = {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: dataTypes.INTEGER
        },
        texto: {
            type: dataTypes.STRING
        },
        createdAt: {
            type: dataTypes.DATE
        },
        updatedAt: {
            type: dataTypes.DATE
        },
        id_usuario: {
            type: dataTypes.INTEGER
        },
        id_producto: {
            type: dataTypes.INTEGER
        }
    };

    let config = {
        tablename: "comentarios",
        timestamps: true,
        underscorded: true,
    };

    let Comentario = sequelize.define(alias, cols, config)

    Comentario.associate = function(models) {
        /*        pertenece a    */
         
        Comentario.belongsTo(models.Usuario, {
                as: "usuario",
                foreignKey: "id_usuario"
            })
        Comentario.belongsTo(models.Producto, {
                as: "producto",
                foreignKey: "id_producto"
        })
       };

    return Comentario
};