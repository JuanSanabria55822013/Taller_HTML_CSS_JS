const numeroA = document.getElementById('numero-a');
const numeroB = document.getElementById('numero-b');
const botonVerificar = document.getElementById('boton-verificar');
const resultado = document.getElementById('resultado');

botonVerificar.addEventListener('click', () => {
  const numeroAValue = parseInt(numeroA.value);
  const numeroBValue = parseInt(numeroB.value);

if (numeroAValue >0 && numeroBValue >0 ){
  if (numeroAValue % numeroBValue === 0 ) {
    resultado.innerText = `El número ${numeroAValue} es divisible entre el número ${numeroBValue}`;
  } else {
    resultado.innerText = `El número ${numeroAValue} no es divisible entre el número ${numeroBValue}.`;
  }
}else{
  resultado.innerText = `Los números deben de ser mayores a 0.`;
}
});

// || numeroBValue % numeroAValue === 0