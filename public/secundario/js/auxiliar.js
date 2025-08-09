const token = 'eyJhbGciOiJIUzI1NiIsImtpZCI6IlMvcVVsWnJSV3FlOERQb3oiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FlaWl1cHd2d2ppYXJleGptc2pzLnN1cGFiYXNlLmNvL2F1dGgvdjEiLCJzdWIiOiI3MGNjYzc4Ny0wYWM1LTRmY2UtOWZmMC0wZTI5YzM5OTA0NDkiLCJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzU0NTQxMDU5LCJpYXQiOjE3NTQ1Mzc0NTksImVtYWlsIjoib3J3ZWxsLnNlcnZpZ3JhZkBvdXRsb29rLmNvbSIsInBob25lIjoiIiwiYXBwX21ldGFkYXRhIjp7InByb3ZpZGVyIjoiZW1haWwiLCJwcm92aWRlcnMiOlsiZW1haWwiXX0sInVzZXJfbWV0YWRhdGEiOnsiZW1haWxfdmVyaWZpZWQiOnRydWV9LCJyb2xlIjoiYXV0aGVudGljYXRlZCIsImFhbCI6ImFhbDEiLCJhbXIiOlt7Im1ldGhvZCI6Im90cCIsInRpbWVzdGFtcCI6MTc1NDUzNzQ1OX1dLCJzZXNzaW9uX2lkIjoiMTc4ZTMxZGUtZTA1ZC00YWRkLTg0NTctYjM1ZWViZDE5NTEzIiwiaXNfYW5vbnltb3VzIjpmYWxzZX0.ep-cvNc8MlCEWdXWQwbn5EJZzTPygKDVzHmL7PZEZJE'

const url = 'https://aeiiupwvwjiarexjmsjs.supabase.co/rest/v1/tasks?select=*'
const apikey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFlaWl1cHd2d2ppYXJleGptc2pzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ1MjQ4MTIsImV4cCI6MjA3MDEwMDgxMn0.zoW4WPlQRdry8Qkjvhc3C9I24KTCBbs8cuK0e-e1ZZo'
const aut = 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFlaWl1cHd2d2ppYXJleGptc2pzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ1MjQ4MTIsImV4cCI6MjA3MDEwMDgxMn0.zoW4WPlQRdry8Qkjvhc3C9I24KTCBbs8cuK0e-e1ZZo'

const pre = document.querySelector('pre');
const addPanel_button =  document.getElementById('addPanel-button')
const input = document.querySelector('input')

async function obtenerProductos() {
    const response = await fetch(url, {
        headers: {
            apikey: apikey,
            Authorization: aut
        }
    });

    if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
    }

    const resultado = await response.json();
    return resultado;
}

async function postProductos(inputTask) {

    console.log(input.value)

    const data = {
        task: input.value,
    };

    const headers = {
    'Content-Type': 'application/json',
    'apikey': apikey,
    'Authorization': 'Bearer TU_TOKEN'
    };

    const response = await fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data)
    })
        .then(response => {
        if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
    }
    return response.json();
    })
        .then(result => {
        console.log('Producto creado:', result);
    })
        .catch(error => {
        console.error('Error al crear producto:', error);
    });
}
// "Content-Type" : 'application/json'

async function main() {
    try {
        const resultado = await obtenerProductos();
        // console.log('Resultado:', resultado);

        let preContent = ''

        resultado.forEach(element => {
            console.log(preContent)
            preContent = preContent + JSON.stringify(element.task)

        });
        
        console.log (preContent)
        pre.textContent = JSON.stringify(preContent, null, 2); // formatea bonito
        

    } catch (error) {
        console.error('Error al obtener productos:', error);
    }
}

main();


addPanel_button.addEventListener('click', ()=>{

    postProductos()

    // const newTask = input.value
    // console.log('new task: ' , newTask)
    
})