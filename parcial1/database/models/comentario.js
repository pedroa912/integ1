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
        }
    }

    let config = {
        tablename: "comentarios",
        timestamps: true,
        underscorded: true,
    }

    let comentario = sequelize.define(alias, cols, config)

    comentario.associate = function(models) {
        /*        pertenece a    */
         
        comentario.belongsTo(models.Usuario, {
                as: "comentario_usuario",
                foreignKey: "id_usuario"
            })
        comentario.belongsTo(models.Producto, {
                as: "comentario_producto",
                foreignKey: "producto_id"
        })
       };

    return comentario
}