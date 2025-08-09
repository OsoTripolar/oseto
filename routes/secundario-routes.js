import express from 'express';
import path from 'path';
import { indexDirGlobal } from '../index.js';

const dir1 = 'public'
const dir2 = 'secundario'
const dirMiddle = path.join(dir1, dir2);

const router = express.Router();

router.get('/', (req,res)=>{
    res.render(path.join(indexDirGlobal, dirMiddle, 'index.ejs'))
})

router.get('/app.js', (req,res)=>{
    res.sendFile(path.join(indexDirGlobal, dirMiddle, 'js','app.js'))
})

router.get('/styles-secundary.css', (req,res)=>{
    res.sendFile(path.join(indexDirGlobal, dirMiddle, 'css','styles-secundary.css'))
})

export default router;