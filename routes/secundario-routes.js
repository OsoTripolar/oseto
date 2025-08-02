import express from 'express';
import path from 'path';
import { indexDir } from '../index.js';

const router = express.Router();

router.get('/', (req,res)=>{
    res.sendFile(path.join(indexDir, 'public', 'secundario', 'index.html'))
})

export default router;