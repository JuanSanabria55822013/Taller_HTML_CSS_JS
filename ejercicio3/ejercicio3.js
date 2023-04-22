const nombre = document.getElementById('nombre');
const edad = document.getElementById('edad');
const botonVerificar = document.getElementById('boton-verificar');
const resultado = document.getElementById('resultado');

botonVerificar.addEventListener('click', () => {
  const nombreValue = nombre.value;
  const edadValue = parseInt(edad.value);

  if (edadValue >= 18) {
    resultado.innerText = 'Hola '+nombreValue + ' usted es mayor de edad.';
  } else {
    resultado.innerText ='Hola '+nombreValue + ' usted es menor de edad.';
  }
});