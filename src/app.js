import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
dotenv.config();

import personaRoutes from './routes/personas.routes.js'
import { PORT } from './config.js'


const app = express();

app.use(morgan('dev'));

app.use(express.json());
app.use('/api', personaRoutes);

app.listen(PORT);
console.log('listening on port', PORT);