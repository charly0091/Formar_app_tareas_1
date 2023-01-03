let fs = require("fs");

let archivoTareas = {
    archivoLeido: "./app-tareas/tareas.json",
    leerArchivo: function(){
        let tareas = fs.readFileSync('./app-tareas/tareas.json',{encoding: "utf-8"});
        return  JSON.parse(tareas);
        
    }
}

module.exports = archivoTareas;