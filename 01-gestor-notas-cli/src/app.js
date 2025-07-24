import {listarNotas,crearNota,eliminarNota,leerNota} from './notas.js';
// const { crearNota, listarNotas, eliminarNota, leerNota } = require('./notas.js');
import process from 'process';
// const process = require('process');

// args es un arreglo con lo que el usuario escribió en la terminal.
const args = process.argv;

const comando = args[2];
const titulo = args[3];
const contenido = args[4];

switch(comando){
    case 'agregar':    
        if(crearNota(titulo,contenido)){
            console.log('Nota agregada');
        }
        break;

    case 'listar':
        if(listarNotas().length === 0){
            console.log('no hay notas');
        }
        break;

    case 'eliminar':
        if(eliminarNota(titulo)){
            console.log('nota eliminada');
        }
        break;
        
    case 'leer':
        console.log(leerNota(titulo));
        break;

}

// Uso desde la terminal:
/* 
node app.js agregar "Título" "Contenido"
node app.js listar
node app.js leer "Título"
node app.js eliminar "Título"
*/