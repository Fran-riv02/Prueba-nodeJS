let {readFileSync} = require('fs')

let tareas = readFileSync('./tareas.json').toString()

console.log(JSON.parse(tareas))

//otra forma

fs.readFile('./archivo1.txt', (error,datos) => {
    if (error)
      console.log(error);
    else
      console.log(datos.toString());
  });




  let {readFileSync} = require('fs')
let tareas = JSON.parse(readFileSync('./tareas.json').toString())
    //console.log(process.argv)

    switch(process.argv[2]){
        case "listar": 
        console.log(tareas)
        break;
        case undefined: 
        console.log('Atención - Tienes que pasar una acción.')
        break;
        default:
        console.log('No entiendo qué quieres hacer.')
        break;
    }


    [{
        "tarea1":{
            "titulo": "tarea 1",
            "estado": "incompleto"
        },
        "tarea2":{
            "titulo": "tarea 2",
            "estado": "completo"
        },
        "tarea3":{
            "titulo": "tarea 3",
            "estado": "en proceso"
        }
    
    }]


    let {readFileSync} = require('fs')
let tareas = JSON.parse(readFileSync('./tareas.json')."utf-8"))

module.exports = tareas