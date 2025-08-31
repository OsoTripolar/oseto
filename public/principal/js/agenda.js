const content = document.querySelector('.content')
const template = document.querySelector('template')
const rows = document.querySelector('.rows')

// FETCH

const linkPrincipal = 'https://aeiiupwvwjiarexjmsjs.supabase.co/rest/v1/osetoDates'
const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFlaWl1cHd2d2ppYXJleGptc2pzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ1MjQ4MTIsImV4cCI6MjA3MDEwMDgxMn0.zoW4WPlQRdry8Qkjvhc3C9I24KTCBbs8cuK0e-e1ZZo'
const authorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFlaWl1cHd2d2ppYXJleGptc2pzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ1MjQ4MTIsImV4cCI6MjA3MDEwMDgxMn0.zoW4WPlQRdry8Qkjvhc3C9I24KTCBbs8cuK0e-e1ZZo'

const optionsGet = {
    headers:{
        apikey : apiKey,
        authorization : authorization
    }
}

fetch(`${linkPrincipal}?select=*`, optionsGet)
    .then(res => res.json())
    .then(res=> { res.forEach(element => {
        const templateRow = template.content.cloneNode(true)

        const tr = templateRow.querySelector('tr')
        const rowId = templateRow.querySelector('.td-id')
        const rowDescription = templateRow.querySelector('.td-description')
        const rowFecha = templateRow.querySelector('.td-fecha')
        
        tr.setAttribute('data-id',element.id)
        rowId.textContent = element.id
        rowDescription.textContent = element.description
        rowFecha.textContent = element.fecha
        
        tr.addEventListener('click', (e) => { //con esta función designamos si quiere borrar o no el dato
            const dataId = e.target.parentNode.getAttribute('data-id')

            const value = confirm('Seguro que quieres borrar')
            
            if (value){
                borrarDatos(dataId)
            }else{
                console.log('no se borró nada')
            }
        })

        rows.appendChild(templateRow)
    });
})


async function borrarDatos(dato){
    try{
        const linkDelete = `${linkPrincipal}?id=eq.${dato}` 
        const optionsDelete = structuredClone(optionsGet)

        optionsDelete.method = 'DELETE'


        console.log(linkDelete)
        console.log(optionsDelete)

        await fetch(linkDelete, optionsDelete)
            .then(res => console.log(res))

    }catch{
        console.error('Hubbo error')
    }
    console.log('Se borraron los datos de ', dato)
}



// AGREGAR TAREA


const addDateButton = document.getElementById('addDate')
const inputText = document.getElementById('inputText')
const inputDate = document.getElementById('inputDate')



addDateButton.addEventListener('click',()=>{

    if(inputDate.value === '' || inputText.value === '' ){
        console.log("Rellena ambos campos pe papeto")
    }else{
        const newData = {
            description: inputText.value,
            fecha: inputDate.value
        }
    
        console.log(newData)

        addDate(newData)
        

        inputDate.value = '' 
        inputText.value = ''
    }

})


// AÑADIR TAREA

async function addDate(newData){
    try{
        const linkPut = linkPrincipal
        const optionsPut = structuredClone(optionsGet)

        optionsPut.method = 'POST'
        optionsPut.body = JSON.stringify(newData)

        optionsPut.headers["Content-Type"] = "application/json"


        console.log(optionsPut)

        await fetch(linkPut, optionsPut)
            .then(res => console.log(res))

    }catch{
        console.error('Hubbo error')
    }
}



