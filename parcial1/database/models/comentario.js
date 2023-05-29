module.exports = (sequelize, dataTypes) => {

    let alias = "comentario"

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

    let comentario = sequelize.define(alias, cols, config)

    comentario.associate = function(models) {
        /*        pertenece a    */
         
        comentario.belongsTo(models.usuario, {
                as: "usuario",
                foreingKey: "id_usuario"})
        comentario.belongsTo(models.producto, {
                as: "producto",
                foreingKey: "comentario_producto"
        })
       };

    return comentario
}