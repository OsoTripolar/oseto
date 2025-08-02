import express from 'express';
import pool from './models/pool.js'; //conexión a db
import path from 'path';
import {fileURLToPath} from 'url'; 
import {config} from 'dotenv'; //para trabajar con variables de entorno
import cors from 'cors'; //para permitirme el acceso desde produccioón
import ejs from 'ejs' // EJSSS

import { subInicio, subVentas, subAbout } from './models/dataTest.js'; //mensajes de testeo de x ruta

import principalRouter from './routes/principal-routes.js';
import principalImgPlaceHolderRouter from './routes/principal-img-placeholder.js';
import secundarioRouter from './routes/secundario-routes.js';

/////// INICIO ---------------------------------------

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename); // Esto luego lo exportaremos como indexDir
const indexDir = __dirname 

console.log('Directorio de index:', indexDir);

const PORT =  process.env.PORT || 3000 // puerto por defecto

const app = express ()

app.set('view engine', "ejs") /// EJSSS
app.set('views', "./views") /// EJSSS

app.use(cors()); // Middlewhere Global, acepta peticiones desde cualquier dominio
app.use(express.json()); // pa que nos lean los JSON

config(); //nos permite trabajar con variables de entorno

/////// RUTAS ---------------------------------------

// Provisional EJSS

app.get('/ejs', (req,res) =>{
    res.render("index")
    // res.send("no carga chamo")
})



// Ruta para el favicon
app.get('/favicon.ico', (req, res) => {
    res.sendFile(path.join(indexDir, 'public', 'principal', 'img-placeholder', 'logo-isotipo-claro.svg'))
})

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

// RUTAS DE PÁGINAS WEB EN PRODUCCIÓN

app.use(('/secundario'), secundarioRouter) // para tester la ruta secundaria

// Rutas generales
app.use(('/'), principalImgPlaceHolderRouter) // Rutas para las imágenes de placeholder del principal
app.use(('/'), principalRouter) //Creo que esto debería ir al final, pero no estoy seguro



// FINAL ------------------------------------------------------

app.listen(PORT, () => {
    console.log('Server on port', PORT)
}) 

export const indexDirGlobal = indexDir