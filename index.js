import express from 'express';
import {config} from 'dotenv';
import pg from 'pg';




/////// INICIO

config(); //nos permite trabajar con variables de entorno

const PORT = 3000 // puerto por defecto
const app = express ()




/////// CONEXION A BASE DE DATOS

const resLocal = { 
    connectionString : process.env.DATABASE_URL,
    ssl: true
    } //PARA TRABAJAR DE MANERA LOCAL: REQUIERE SSL EN TRUE

const resServer = {
    connectionString : process.env.DATABASE_URL,
    }//PARA SUBIR A RENDER: NO DEBE LLEVAR SSL

let respuestaJSON = resLocal

if (!(process.env.ENVIRONTMENT === 'development')){
    respuestaJSON = resServer
    console.log('Estamos en produccion')
} else{    
    console.log('Estamos en desarrollo')
}

const pool = new pg.Pool(respuestaJSON) // tengo k pegarle dentro la respuesta




/////// RUTAS

app.get('/ping', async (req,res)=>{
    const resul = await pool.query('SELECT NOW()')
    return res.json(resul.rows[0])
})

app.get('/', (req,res)=>{
    res.send('Bienvenido a la página de Osito Style')
})

app.listen(PORT, () => {
    console.log('Server on port', PORT)
}) 