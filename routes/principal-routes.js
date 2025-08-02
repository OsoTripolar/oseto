import express from 'express';
import path from 'path';
import { indexDirGlobal } from '../index.js';

const dir1 = 'public'
const dir2 = 'principal'
const dirMiddle = path.join(dir1, dir2);

const router = express.Router();

router.get('/', (req,res)=>{
    res.render(path.join(indexDirGlobal, dirMiddle, 'index.ejs'))
})

router.get('/styles.css', (req,res)=>{
    res.sendFile(path.join(indexDirGlobal, dirMiddle, 'styles.css'))
})

router.get('/wake.js', (req,res)=>{
    res.sendFile(path.join(indexDirGlobal, dirMiddle, 'wake.js'))
})

router.get('/futuras-tareas', (req,res)=>{
    res.render(path.join(indexDirGlobal, dirMiddle, 'futuras-tareas.ejs'))
})

router.get('/about', (req,res)=>{
    res.render(path.join(indexDirGlobal, dirMiddle, 'about.ejs'))
})

router.get('/user', (req,res)=>{
    res.render(path.join(indexDirGlobal, dirMiddle, 'user.ejs'))
})

router.use((req,res)=>{
    res.status(404).render(path.join(indexDirGlobal, dirMiddle, '404.ejs'))
})

export default router;