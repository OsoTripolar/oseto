import express from 'express';
import path from 'path';
import { indexDirGlobal } from '../index.js';

const router = express.Router();

router.get('/', (req,res)=>{
    res.sendFile(path.join(indexDirGlobal, 'public', 'secundario', 'index.html'))
})

export default router;