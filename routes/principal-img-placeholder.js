import express from 'express';
import path from 'path';
import { indexDirGlobal } from '../index.js';

const dir1 = 'public'
const dir2 = 'principal'
const dir3 = 'img-placeholder'
const dirMiddle = path.join(dir1, dir2, dir3);

const router = express.Router();

router.get('/logo-isotipo-claro.svg', (req, res) => {
    res.sendFile(path.join(indexDirGlobal, dirMiddle, 'logo-isotipo-claro.svg'))
}) 

router.get('/logo-isotipo-oscuro.svg', (req, res) => {
    res.sendFile(path.join(indexDirGlobal, dirMiddle, 'logo-isotipo-oscuro.svg'))
}) 

router.get('/logo-lateral-oscuro.svg', (req, res) => {
    res.sendFile(path.join(indexDirGlobal, dirMiddle, 'logo-lateral-oscuro.svg'))
}) 

router.get('/logo-normal-claro.svg', (req, res) => {
    res.sendFile(path.join(indexDirGlobal, dirMiddle, 'logo-normal-claro.svg'))
}) 

router.get('/logo-normal-oscuro.svg', (req, res) => {
    res.sendFile(path.join(indexDirGlobal, dirMiddle, 'logo-normal-oscuro.svg'))
}) 

export default router;