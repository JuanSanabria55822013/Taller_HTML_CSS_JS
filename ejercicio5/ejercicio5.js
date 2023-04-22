const numero = document.getElementById('numero');
const texto = document.getElementById('texto');
const tipo = document.getElementById('tipo');

numero.addEventListener('input', () => {
  const numeroValue = numero.value;

  if (numeroValue !== '') {
    texto.textContent = numeroValue;

    if (numeroValue % 2 === 0) {
      tipo.textContent = 'par';
    } else {
      tipo.textContent = 'impar';
    }
  } else {
    texto.textContent = '';
    tipo.textContent = '';
  }
});