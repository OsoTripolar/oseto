import express from 'express';
import pool from './models/pool.js'; //conexión a db
import path from 'path';
import {fileURLToPath} from 'url'; 
import {config} from 'dotenv'; //para trabajar con variables de entorno
import cors from 'cors'; //para permitirme el acceso desde produccioón

import principalRouter from './routes/principal-routes.js';
import publicPrincipalRouter from './routes/principal-public-routes.js';
import secundarioRouter from './routes/secundario-routes.js';


/////// INICIO ---------------------------------------


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename); // Esto luego lo exportaremos como indexDir
const indexDir = __dirname 

const PORT =  process.env.PORT || 3000 // puerto por defecto

const app = express ()

app.set('view engine', "ejs") /// EJS: permite utilizar este tipo de archivos
app.set('views', "./views") /// EJS: definimos la rutas de los templates

app.use(cors()); // Middleware global que habilita CORS para todos los orígenes. Útil en desarrollo o APIs abiertas.
app.use(express.json()); // pa que nos lean los JSON

config(); //nos permite trabajar con variables de entorno


/////// RUTAS ---------------------------------------


// RUTAS DE PÁGINAS WEB EN PRODUCCIÓN
app.use(('/secundario'), secundarioRouter) // para tester la ruta secundaria

// Rutas generales
app.use(('/'), publicPrincipalRouter) // Archivos estáticos generales como imágenes, css, fucniones js
app.use(('/'), principalRouter) //Va al final xq tiene el error 404


// SALIDA ------------------------------------------------------


app.listen(PORT, () => {
    console.log('Server on port', PORT)
}) 

export const indexDirGlobal = indexDir