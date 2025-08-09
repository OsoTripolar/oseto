import pg from 'pg'
import {config} from 'dotenv';

config()

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
    // console.log('Estamos en produccion')
} 

// else{    
//     console.log('Estamos en desarrollo')
// }

const pool = new pg.Pool(respuestaJSON) // tengo k pegarle dentro la respuesta

export default pool