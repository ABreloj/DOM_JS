// Fetch esuna funcionara obtener recursos
//nos retorna una promesa
//then y catch

console.log('Iniciar Peticion');
fetch('http://127.0.0.1:5500/respuesta.txt')
    .then(result=>result.text())
    .then(datos=>console.log(datos));

console.log('Iniciar Peticion 2');
fetch('http://127.0.0.1:5500/respuesta.json')
    .then(result=>result.json())
    .then(datos=>console.log(datos));    