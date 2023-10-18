import { Router } from "express";
import {welcome, fetchAll, fetchOne, add, update, remove, holaAri} from '../controllers/personas.controller.js'
import { validateSchema } from "../middlewares/validacion.middleware.js";
import { addPersonaSchema } from "../schemas/personas.schema.js";

const router = Router();

//Ruta inicial
router.get('/', welcome);

//Consultas
router.get('/fetchAll', fetchAll);
router.get('/fetchOne/:curp', fetchOne)

//Agregar registro
router.post('/add', validateSchema(addPersonaSchema), add);

//Actualizar registro
router.put('/update/:curp', validateSchema(addPersonaSchema),update);

//Eliminar registro
router.delete('/remove/:curp', remove);

router.get('/holi', holaAri)
export default router;
