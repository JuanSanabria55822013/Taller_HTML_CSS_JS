const numero = document.getElementById('numero');
const boton = document.getElementById('identificar');
const resultado = document.getElementById('resultado');

boton.addEventListener('click', () => {
const num = numero.value;
  if (num < 0){
    resultado.innerText = `El número ${num} no es un numero entero positivo`;
  }else {
  if ((num % 1 == 0)) {
    if (num % 2 === 0) {
      resultado.innerText = `El número ${num} es par`;
      } else {
        resultado.innerText = `El número ${num} es impar`;
      }
    }else{
      resultado.innerText = `El número ${num} no es un numero entero`;
    }
  }
});