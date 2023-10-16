import { z } from "zod";

const curpRegex = /^[A-Z]{4}\d{6}[HM][A-Z]{5}[A-Z0-9]{2}$/;

export const addPersonaSchema = z.object({
    curp: z.string({
        required_error: 'CURP requerida',
    })
    .regex(curpRegex, {
        message: 'CURP inválida. La CURP debe seguir el formato correcto.'
    })
    .min(18, 'La CURP debe tener al menos 18 caracteres')
    .max(18, 'La CURP no debe exceder los 18 caracteres'),

    nombre: z.string({
        required_error: 'Nombre requerido'
    })
    .max(30, 'Solo 30 caracteres permitidos'),

    paterno: z.string({
        required_error: 'Apellido paterno requerido',
    })
    .max(30, 'Solo 30 caracteres permitidos'),
    
    materno: z.string({
        required_error: 'Apellido materno requerido',
    })
    .max(30, 'Solo 30 caracteres permitidos'),

    sexo: z.string({
        required_error: 'Sexo requerido',
    })
    .max(1, 'Solo algun caracter (M para hombre y F para mujer)'),

    fecha_nac: z.string({
        required_error: 'Fecha de nacimiento requerida',
    }),

    estado: z.string({
        required_error: 'Estado requerido',
    })
    .max(2, 'Digite el numero de su estado'),

    municipio: z.number({
        required_error: 'Municipio requerido',
    }),

    genero: z.string({
        required_error: 'Genero requerido',
    })
    .max(20, 'Digite su genero')
});