// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaNombres = [];

function agregarAmigo() {
    const nombreInput = document.getElementById('amigo');
    const nombre = nombreInput.value.trim();
    if (nombre) {
        listaNombres.push(nombre);
        nombreInput.value = '';
        mostrarNombres();
    } else {
        alert('Por favor, ingresa un nombre válido.');
    }
}

function mostrarNombres() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    listaNombres.forEach((nombre, index) => {
        const li = document.createElement('li');
        li.textContent = nombre;
        lista.appendChild(li);
    });
}