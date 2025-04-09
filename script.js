// Se obtiene el elemento del input con id "pantalla"
let pantalla = document.getElementById('pantalla');

// Función para agregar un valor (número u operador)
function agregar(valor) {
  pantalla.value += valor; // Se concatena
}

// Función para limpiar
function limpiar() {
  pantalla.value = '';
}

// Función para borrar ultimo caracter
function borrar() {
  pantalla.value = pantalla.value.slice(0, -1);
}

// Función para calcular el resultado
function calcular() {
  try {
    // eval() evalúa la expresión matemática ingresada
    pantalla.value = eval(pantalla.value);
  } catch (e) {
    pantalla.value = 'Error';
  }
}
