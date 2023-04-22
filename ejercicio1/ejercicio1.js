const textarea = document.getElementById('texto');
const contador = document.getElementById('contador');

textarea.addEventListener('input', () => {
   const texto = textarea.value;
   contador.textContent = texto.length;
 });
