import express from 'express';
import pool from './models/pool.js'; //conexión a db
import path from 'path';
import {fileURLToPath} from 'url';
import {config} from 'dotenv';

import { subInicio, subVentas, subAbout } from './models/dataTest.js'; //mensajes de testeo de x ruta

import principalRouter from './routes/principal-routes.js';
import secundarioRouter from './routes/secundario-routes.js';

/////// INICIO ---------------------------------------

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename); // Esto luego lo exportaremos como indexDir

const PORT =  process.env.PORT || 3000 // puerto por defecto
const app = express ()

config(); //nos permite trabajar con variables de entorno



/////// RUTAS ---------------------------------------


// Rutas de prueba para el servidor
app.get('/comida', (req,res)=>res.send('Bienvenido a la página de Osito Style SECCION COMIDA'))
app.get('/ventas', (req,res)=>res.send('Bienvenido a la página de Osito Style SECCION VENTAS'))

// Simula el acceso a una ruta 
app.get('/alterno', (req,res)=> res.send(subInicio))
app.get('/alterno/ventas', (req,res)=> res.send(subVentas))
app.get('/alterno/about', (req,res)=> res.send(subAbout))

// confirmación de conexión a la base de datos
app.get('/ping', async (req,res)=>{
    const resul = await pool.query('SELECT NOW()')
    return res.json(resul.rows[0])
})

app.use(('/'), principalRouter)
app.use(('/secundario'), secundarioRouter)

// FINAL ------------------------------------------------------

app.listen(PORT, () => {
    console.log('Server on port', PORT)
}) 

export const indexDir = __dirname