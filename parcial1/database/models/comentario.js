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

    let Comentario = sequelize.define(alias, cols, config)

    Comentario.associate = function(models) {
        /*        pertenece a    */
         
        Comentario.belongsTo(models.Usuario, {
                as: "comentario_usuario",
                foreingKey: "id_usuario"
            })
        Comentario.belongsTo(models.Producto, {
                as: "comentario_producto",
                foreignKey: "producto_id"
        })
       };

    return Comentario
}