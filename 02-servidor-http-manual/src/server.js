import http from 'http';
import {listarNotas,crearNota,eliminarNota,leerNota} from './modulo.js';

// levanto el servidor y escucho en el puerto 3000 
http.createServer(function(req,res){
    if(req.url === '/modulo/listar' && req.method === 'GET'){
        const notasListadas = listarNotas();
        res.writeHead(200,{'Content-Type':'applicacion/json'});
        res.end(JSON.stringify(notasListadas));
    }else if(req.url === '/modulo/leer' && req.method === 'GET'){
        
    }

  res.writeHead(200,{'content-Type':'text/plain'});
//   mandamos una respuesta al cliente que hizo la request:
  res.write("Hola mundo desde server.js");
  res.end();  
}).listen(3000);

console.log("servidor escuchando en http://localhost:3000");