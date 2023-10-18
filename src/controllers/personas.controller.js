import Personas from '../models/personas.model.js'

export const welcome = (req, res) => {
    res.status(200).json({
        ok: true,
        status: 200,
        message: 'Bienvenido a la API REST de personas'
    })
}

export const fetchAll = async (req, res) => {
    const personas = await Personas.findAll()
    res.status(200).json({
        ok: true,
        status: 200,
        body: personas
    })
};

export const fetchOne = async (req, res) => {
    const curp = req.params.curp;
    const persona = await Personas.findOne({
        where: {
            curp: curp
        }
    })
    res.status(200).json({
        ok: true,
        status: 200,
        body: persona
    })
};

export const add = async (req, res) => {
    const dataPersonas = req.body;

    const createPersona = await Personas.create({
        curp: dataPersonas.curp,
        nombre: dataPersonas.nombre,
        paterno: dataPersonas.paterno,
        materno: dataPersonas.materno,
        sexo: dataPersonas.sexo,
        fecha_nac: dataPersonas.fecha_nac,
        estado: dataPersonas.estado,
        municipio: dataPersonas.municipio,
        genero: dataPersonas.genero
    })
    res.status(201).json({
        ok: true,
        status: 200,
        message: 'Persona agregada'
    })
};

export const update = async (req, res) => {
    const curp = req.params.curp;
    const dataPersonas = req.body;

    const updatePersona = await Personas.update({
        nombre: dataPersonas.nombre,
        paterno: dataPersonas.paterno,
        materno: dataPersonas.materno,
        sexo: dataPersonas.sexo,
        fecha_nac: dataPersonas.fecha_nac,
        estado: dataPersonas.estado,
        municipio: dataPersonas.municipio,
        genero: dataPersonas.genero
    },
    {
        where: {
            curp: curp
        }
    }
    )
    res.status(200).json({
        ok: true,
        status: 200,
        message: 'Actualizado'
    })
};

export const remove = async (req, res) => {
    const curp = req.params.curp;

    const removePersona = await Personas.destroy({
        where: {
            curp: curp
        }
    })

    res.status(200).json({
        ok: true,
        status: 200,
        message: 'Eliminado'
    })
}


export const holaAri = (req, res) => {
    res.status(200).json({
        ok: true,
        status: 200,
        message: 'Holi, si ves esto me gustas y estás bien bonita<3'
    })
}
