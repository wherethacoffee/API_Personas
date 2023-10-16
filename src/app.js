import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
dotenv.config();

import personaRoutes from './routes/personas.routes.js'


const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('dev'));

app.use(express.json());
app.use('/api', personaRoutes);

app.listen(port);
console.log('listening on port', port);