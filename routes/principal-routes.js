import express from 'express';
import path from 'path';
import { indexDir } from '../index.js';

const router = express.Router();

router.get('/', (req,res)=>{
    res.sendFile(path.join(indexDir, 'public', 'principal', 'index.html'))
})

router.get('/styles.css', (req,res)=>{
    res.sendFile(path.join(indexDir, 'public', 'principal', 'styles.css'))
})

router.get('/futuras-tareas', (req,res)=>{
    res.sendFile(path.join(indexDir, 'public', 'principal', 'futuras-tareas.html'))
})

router.get('/about', (req,res)=>{
    res.sendFile(path.join(indexDir, 'public', 'principal', 'about.html'))
})

router.use((req,res)=>{
    res.status(404).sendFile(path.join(indexDir, 'public', 'principal', '404.html'))
})
export default router;