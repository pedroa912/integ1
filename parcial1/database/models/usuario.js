module.exports = (sequelize,dataTypes) => {

    let alias = "usuario"

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

    let usuario = sequelize.define(alias,cols,config)

    return usuario
}