import { indexDirGlobal } from '../index.js';

// mucha webada p xd
app.get('/logo-isotipo-claro.svg', (req, res) => {
    res.sendFile(path.join(indexDirGlobal, 'public', 'principal', 'img-placeholder', 'logo-isotipo-claro.svg'))
}) 

app.get('/logo-isotipo-oscuro.svg', (req, res) => {
    res.sendFile(path.join(indexDirGlobal, 'public', 'principal', 'img-placeholder', 'logo-isotipo-oscuro.svg'))
}) 

app.get('/logo-lateral-oscuro.svg', (req, res) => {
    res.sendFile(path.join(indexDirGlobal, 'public', 'principal', 'img-placeholder', 'logo-lateral-oscuro.svg'))
}) 

app.get('/logo-normal-claro.svg', (req, res) => {
    res.sendFile(path.join(indexDirGlobal, 'public', 'principal', 'img-placeholder', 'logo-normal-claro.svg'))
}) 

app.get('/logo-normal-oscuro.svg', (req, res) => {
    res.sendFile(path.join(indexDirGlobal, 'public', 'principal', 'img-placeholder', 'logo-normal-oscuro.svg'))
}) 