/* 
En src/notas.js, escribís funciones como:
crearNota(titulo, contenido)
listarNotas()
leerNota(titulo)
eliminarNota(titulo)
Todas van a trabajar sobre un archivo notas.json que actúa como base de datos local.
En src/app.js, usás process.argv para leer los comandos del usuario desde la consola.
*/

// const fs = require('fs');

/**
 * Lee las notas existentes (desde un JSON).
 * 
 * Agrega la nueva nota (como un objeto con titulo y contenido) al array.
 * 
 * Guarda todo nuevamente en el archivo.
 */
function crearNota(titulo, contenido){
    const fs = require('fs');
    try{
        let notasActuales = listarNotas();
        const newNote = {titulo,contenido};
        notasActuales.push(newNote);
        fs.writeFileSync('./notas.json',JSON.stringify(notasActuales,null,2));
        
    }catch(err){
        console.error(err);
        return;
    }
    return;
}

/**
 * Lee el archivo con las notas.
 * 
 * Muestra en consola los títulos y también su contenido.
 * 
 * Si no hay archivo, devuelve un array vacío.
 */
function listarNotas(){
    const fs = require('fs');
    let notasJSON = fs.readFileSync('./notas.json','utf-8');
    let notasParseadas = JSON.parse(notasJSON);
    try{
        // var num = 1;
        notasParseadas.forEach(nota => {
            // console.log("nota nro: "+num);
            console.log(nota);
            // num = num++;
        });
        // return;
    }catch(err){
        // si el archivo no existe o está vacío
        console.error(err);
        return [];
    }        
    return notasParseadas;
}

/**
 * Lee las notas existentes.
 * 
 * Filtra todas las que no tengan el título a eliminar.
 * 
 * Sobreescribe el archivo con el nuevo array. 
 */
function eliminarNota(titulo){
    let notasExistentes = listarNotas();
    const fs = require('fs');
    // var bandera = false;
    try{
        const notasFiltradas = notasExistentes.filter((nota) => 
            nota.titulo !== titulo
        );
         if(notasExistentes.length === notasFiltradas.length){
            console.log("No se encontró ninguna nota con ese título");
         }
        fs.writeFileSync('./notas.json',JSON.stringify(notasFiltradas,null,2));
        return notasFiltradas;
    }catch(err){
        console.error(err); 
    }
    return notasExistentes;
}

/**
 * Busca una nota específica y muestra su contenido en consola.
 */
function leerNota(titulo){
    const fs = require('fs');
    try{
        let notasJSON = fs.readFileSync('./notas.json','utf-8');
        let notasParseadas = JSON.parse(notasJSON);
        const Nota = notasParseadas.find(notaBuscada => notaBuscada.titulo === titulo);
        var contenido = Nota !== undefined ? Nota.contenido : "no se encontró la nota especificada";
        console.log("contenido: "+contenido); 
    }catch(err){
        console.error(err);
    }
}

// crearNota("tercer titulo","contenido de la nota tres");

// listarNotas();
// console.log("hola");
// eliminarNota('segundo titulo');
leerNota('primer titulo');