# Servidor HTTP Básico sin Express
modificando la URL del navegador siempre se tratará de una solicitud GET. si quiero enviar POST, puedo usar `fetch` desde la consola del navegador:
```js
fetch('http://localhost:3000/modulo/crear/MiTitulo', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ contenido: 'Texto de mi nota' })
})
.then(res => res.text())
.then(data => console.log(data));
```
o también Postman, o un formulario con el método `POST`.
