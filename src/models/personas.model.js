import { Model, Sequelize, DataTypes } from "sequelize";
import { 
    DB_HOST,
    DB_NAME,
    DB_PWD,
    DB_USER,
    DB_PORT } from '../config.js'

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PWD, {
    host: DB_HOST,
    dialect: 'mysql',
    port: DB_PORT
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