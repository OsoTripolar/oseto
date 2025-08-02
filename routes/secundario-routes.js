import express from 'express';
import path from 'path';
import { indexDirGlobal } from '../index.js';

const dir1 = 'public'
const dir2 = 'secundario'
const dirMiddle = path.join(dir1, dir2);

const router = express.Router();

router.get('/', (req,res)=>{
    res.sendFile(path.join(indexDirGlobal, dirMiddle, 'index.html'))
})

export default router;