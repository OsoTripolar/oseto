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

export default router;