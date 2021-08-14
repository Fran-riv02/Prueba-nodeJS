let fs = require('fs')

let tareas = JSON.parse(fs.readFileSync(__dirname + '/tareas.json', 'utf-8'))

//console.log(tareas)

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

//agrego esto para el commit