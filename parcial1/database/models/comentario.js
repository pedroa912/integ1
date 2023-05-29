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

    return comentario
}