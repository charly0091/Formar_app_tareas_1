let fs = require("fs");
let process = require("process");
let archivoTareas = require("./funcionesDeTareas")

let tareas = archivoTareas.leerArchivo();
if(process.argv[2] === undefined){
    process.argv[2] = "|//|";
}
let texto = process.argv[2].toLowerCase().trim();
let acciones = ["listar","crear"];

switch(texto){
    case acciones[0]:
        if(tareas.length === 0){
            console.log("No hay tareas cargadas")
        }else {
            console.log("Listado de tareas");
            console.log("------------------------");
            for(let i=0;i < tareas.length; i++){
                console.log((i+1).toString(), ". ", tareas[i].titulo , " - " , tareas[i].estado);
            }
            console.log("------------------------");
        }
        break;
    case acciones[1]:
        let titulo = process.argv[3];
        let estado = process.argv[4];
        tareas.push({
            titulo,
            estado
        })
        let tareasActualizadas = JSON.stringify(tareas);
        fs.writeFileSync('./app-tareas/tareas.json', tareasActualizadas, 'utf-8' )
        console.log(`Tarea ${titulo}, creada`);
        break;
    case "|//|":
        console.log("------------------------");
        console.log("Atencion - Tienes que pasar una accion");
        console.log("Las acciones disponibles son: " + acciones)
        console.log("------------------------");
        break;
    default:
        console.log("------------------------");
        console.log("No entiendo que quieres hacer");
        console.log("Las acciones disponibles son: " + acciones)
        console.log("------------------------");
        break; 
        
}



//console.log(personasParseadas);

//transformo JS a Json
//let personasJSON = JSON.stringify(personasParseadas);
//console.log(personasJSON);

//Escribo archivo con los nuevos datos
//fs.writeFileSync("./personas.json", personasJSON,{ encoding: "utf-8"});



/* let personaJson = '{"nombre" : "Carlos" , "edad" : 31}';
console.log(typeof personaJson);

let personaParseado = JSON.parse(personaJson);
console.log(personaParseado); */