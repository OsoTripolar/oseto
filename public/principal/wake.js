// Esta función solo sirve para molestar al servidor
// se activa automáticamente cada que se vistia la página

console.log('------------- Iniciando testeo de la api -------------');



// Primero haré una petición a una ruta de prueba

// En este caso la pokeapi
const RUTAAPI = 'https://oseto.onrender.com/';

fetch(RUTAAPI)
.then(response => {    
    console.log ('Intento de hacer fetch a la url de esta api');
    console.log ("El tipo de respuesta de 'response' es: ",typeof response);
    console.log (response)
    })
.catch(error => console.error('Hubo un error al hacer fetch con la url de esta api', error))
.finally(()=> console.log('------------- Finalizando testeo de api -------------'));

const doYouWant = false

if(doYouWant){

fetch(RUTAAPI),{
    method: 'POST',
    headers: {
        'Content-Type' : 'application'
    },
    body: JSON.stringify({
        mensaje: 'Hola desde el frontend 👋',
        fecha: new Date().toISOString()
    })
}
.then(res => res.json())
.then(data => console.log ('Respuesta del servidor: ',data))
.catch(error => console.error('Error al hacer post pipipi', error))
.finally(()=> console.log('------------- Hemos salido de la segunda aplicación -------------'));

}