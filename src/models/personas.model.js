import { name } from "ejs";
import { Model, Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize('personas_db', 'root', 'admin', {
    host: 'localhost',
    dialect: 'mysql',
    port: '3306'
});

class Persona extends Model {}

Persona.init({
    curp: {
        type: DataTypes.STRING,
        primaryKey: true, // Esto define la columna 'curp' como clave primaria.
        allowNull: false,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    paterno: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    materno: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    sexo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    fecha_nac: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    estado: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    municipio: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    genero: {
        type: DataTypes.STRING,
        allowNull: false,
    }, 
}, {
    sequelize,
    modelName: 'Persona',
    tableName: 'personas',
    timestamps: false
});

export default Persona;

/*async function testConn() {
    try {
        sequelize.authenticate();
        console.log("Bien");
    } catch (error) {
        console.error("Error: " + error);
    }
};

testConn();*/