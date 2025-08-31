// Esta función solo sirve para molestar al servidor cada vez que se acceda desde el entorno de desarrollo,
// para que despierte 

const RUTAAPI = 'https://oseto.onrender.com/';

fetch(RUTAAPI)
.then(response => {    
    console.log ('Intento de hacer fetch a la url de esta api');
    console.log ("El tipo de respuesta de 'response' es: ",typeof response);
    console.log (response)
    })
.catch(error => console.error('Hubo un error al hacer fetch con la url de esta api', error))
.finally(()=> console.log('------------- Finalizando testeo de api -------------'));


// quiero que si no responde en x segundos, entonces me dé la respuesta, :El servidor está durmiendo, para el futuro

