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
                foreignKey: "id_usuario"})
        Comentario.belongsTo(models.Producto, {
                as: "comentario_producto",
                foreignKey: "producto_id"
        })
       };

    return Comentario
}