const texto = document.getElementById('texto');
const buscar = document.getElementById('buscar');
const botonBuscar = document.getElementById('boton-buscar');

botonBuscar.addEventListener('click', () => {
  const textoValue = texto.value;
  const buscarValue = buscar.value;

  if (buscarValue != '') {
    const regex = new RegExp(buscarValue, 'gi');
    const resultado = textoValue.replace(regex, (match) => {
      return '<span class="resaltado">' + match + '</span>';
    });
    document.getElementById('resultado').innerHTML = resultado;
  } else {
    document.getElementById('resultado').innerHTML = textoValue;
  }
});