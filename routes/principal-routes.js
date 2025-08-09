import express from 'express';
import path from 'path';
import { indexDirGlobal } from '../index.js';

//dir 1 : views
const dirViews = 'views'

//dir 2 : public
const dirAux1 = 'public'
const dirAux2 = 'principal'
const dirPublic = path.join(dirAux1, dirAux2);

const router = express.Router();

// STATICS

router.get('/styles.css', (req,res)=>{
    res.sendFile(path.join(indexDirGlobal, dirPublic, 'css', 'styles.css'))
})

router.get('/styles-youtube.css', (req,res)=>{
    res.sendFile(path.join(indexDirGlobal, dirPublic, 'css', 'styles-youtube.css'))
})

router.get('/styles-user.css', (req,res)=>{
    res.sendFile(path.join(indexDirGlobal, dirPublic, 'css', 'styles-user.css'))
})

router.get('/wake.js', (req,res)=>{
    res.sendFile(path.join(indexDirGlobal, dirPublic, 'js','wake.js'))
})

// EJS

router.get('/', (req,res)=>{
    res.render(path.join(indexDirGlobal, dirViews, 'index.ejs'))
})

router.get('/futuras-tareas', (req,res)=>{
    res.render(path.join(indexDirGlobal, dirViews, 'futuras-tareas.ejs'))
})

router.get('/about', (req,res)=>{
    res.render(path.join(indexDirGlobal, dirViews, 'about.ejs'))
})

router.get('/user', (req,res)=>{
    res.render(path.join(indexDirGlobal, dirViews, 'user.ejs'))
})

router.get('/youtube', (req,res)=>{
    res.render(path.join(indexDirGlobal, dirViews, 'youtube.ejs'))
})

// confirmación de conexión a la base de datos :MOVER A MODELS
router.get('/ping', async (req,res)=>{
    const resul = await pool.query('SELECT NOW()')
    return res.json(resul.rows[0])
})

// 404 GENERAL

router.use((req,res)=>{
    res.status(404).render(path.join(indexDirGlobal, dirViews, '404.ejs'))
})

export default router;