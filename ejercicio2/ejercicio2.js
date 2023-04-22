const valor = document.getElementById('valor');
const texto = document.getElementById('texto');
const tipo = document.getElementById('tipo');

valor.addEventListener('input', () => {
  const valorValue = valor.value;
  texto.textContent = valorValue;

  if (isNaN(valorValue)) {
    tipo.textContent = 'texto';
  } else {
    tipo.textContent = 'número';
  }
});