import express from 'express';
import path from 'path';
import { indexDirGlobal } from '../index.js';

const dir1 = 'public'
const dir2 = 'principal'
const dirMiddle = path.join(dir1, dir2);

const router = express.Router();

router.get('/', (req,res)=>{
    res.sendFile(path.join(indexDirGlobal, dirMiddle, 'index.html'))
})

router.get('/styles.css', (req,res)=>{
    res.sendFile(path.join(indexDirGlobal, dirMiddle, 'styles.css'))
})

router.get('/wake.js', (req,res)=>{
    res.sendFile(path.join(indexDirGlobal, dirMiddle, 'wake.js'))
})

router.get('/futuras-tareas', (req,res)=>{
    res.sendFile(path.join(indexDirGlobal, dirMiddle, 'futuras-tareas.html'))
})

router.get('/about', (req,res)=>{
    res.sendFile(path.join(indexDirGlobal, dirMiddle, 'about.html'))
})

router.get('/user', (req,res)=>{
    res.sendFile(path.join(indexDirGlobal, dirMiddle, 'user.html'))
})

router.use((req,res)=>{
    res.status(404).sendFile(path.join(indexDirGlobal, dirMiddle, '404.html'))
})

export default router;