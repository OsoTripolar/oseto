import express from 'express';
import {config} from 'dotenv';
import pg from 'pg';

config();

const PORT = 3000

const app = express ()
const pool = new pg.Pool({
    connectionString : process.env.DATABASE_URL,
    ssl: true
})

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