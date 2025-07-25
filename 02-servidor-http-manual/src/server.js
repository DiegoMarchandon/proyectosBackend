import http from 'http';
import {listarNotas,crearNota,eliminarNota,leerNota} from './modulo.js';

// levanto el servidor y escucho en el puerto 3000 
http.createServer(function(req,res){
    if(req.url === '/modulo/listar' && req.method === 'GET'){
        const notasListadas = listarNotas();
        // res.writeHead(200,{'Content-Type':'applicacion/json'});
        res.end(JSON.stringify(notasListadas));
    }else if(req.url.startsWith('/modulo/leer/') && req.method === 'GET'){
        const params = new URLSearchParams(req.url.split('?')[1]);
        const titulo = params.get('titulo');
        const nota = leerNota(titulo);
        // URL de consulta, ejemplo:
        // /modulo/leer/?titulo=<titulo-de-la-nota></titulo-de-la-nota>
        
        // const partes = req.url.split('/');
        // const titulo = decodeURIComponent(partes[3]);
        // const nota = leerNota(titulo);

        if(nota){
            res.writeHead(200,{'Content-Type':'application/json'});
            res.end(JSON.stringify(nota));
        }else{
            res.writeHead(400,{'Content-Type':'text/plain'});
            res.end('Nota no encontrada');
        }
    }else if(req.url.startsWith('/modulo/crear/') && req.method === 'POST'){
        const partes = req.url.split('/');
        const titulo = decodeURIComponent(partes[3]);
        console.log("titulo: "+titulo);
        const contenido = req.body.contenido;
        console.log("contenido: "+contenido);	
        const nota = crearNota(titulo,contenido);
        if(nota){
            res.writeHead(201,{'Content-Type':'application/json'});
            res.end('Nota creada');
        }else{
            res.writeHead(400,{'Content-Type':'text/plain'});
            res.end('Nota no encontrada');
        }
        return;
    }else if(req.url.startsWith('/modulo/eliminar/') && req.method === 'DELETE'){
        const partes = req.url.split('/');
        const titulo = decodeURIComponent(partes[3]);
        const nota = eliminarNota(titulo);
        if(nota){
            res.writeHead(201,{'Content-Type':'application/json'});
            res.end('Nota creada');
        }else{
            res.writeHead(404,{'Content-Type':'text/plain'});
            res.end('Nota no encontrada');
        }
    }

//   res.writeHead(200,{'content-Type':'text/plain'});
//   mandamos una respuesta al cliente que hizo la request:
//   res.write("Hola mundo desde server.js");
//   res.end();  
}).listen(3000);

console.log("servidor escuchando en http://localhost:3000");