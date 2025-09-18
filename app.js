// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Lista para almacenar los nombres de los amigos
let listaNombres = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const nombreInput = document.getElementById('amigo');
    const nombre = nombreInput.value.trim();
    if (nombre) {
        listaNombres.push(nombre);
        nombreInput.value = '';
        mostrarNombres();
    } else {
        alert('Por favor, inserte un nombre.');
    }
}

// Función para mostrar los nombres en la lista
function mostrarNombres() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    listaNombres.forEach((nombre, index) => {
        const li = document.createElement('li');
        li.textContent = nombre;
        lista.appendChild(li);
    });
}   

//Sorteo de amigo secreto
function sortearAmigo() {
    if (listaNombres.length === 0) {
        document.getElementById('resultado').innerHTML = 'No hay amigos para sortear.';
        return;
    }
    const indiceAleatorio = Math.floor(Math.random() * listaNombres.length);
    const amigoSorteado = listaNombres[indiceAleatorio];
    document.getElementById('resultado').innerHTML = `El amigo secreto es: <strong>${amigoSorteado}</strong>`;
}

// Agregar nombre con Enter
document.getElementById('amigo').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        agregarAmigo();
    }
});

// Sortear con S y resetear con R
document.addEventListener('keydown', function(event) {
    if (event.target.id === 'amigo') return; // Evita conflicto al escribir nombres
    if (event.key.toLowerCase() === 's') {
        sortearAmigo();
    }
    if (event.key.toLowerCase() === 'r') {
        resetearJuego();
    }
});

// Función para resetear el juego
function resetearJuego() {
    listaNombres = [];
    mostrarNombres();
    document.getElementById('resultado').innerHTML = '';
}