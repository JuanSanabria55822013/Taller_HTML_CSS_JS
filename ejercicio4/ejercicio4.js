const btnVerificar = document.getElementById("verificar");
const mensaje = document.getElementById("mensaje");

btnVerificar.addEventListener("click", () => {
    const name = document.getElementById("name").value;
    const materia = document.getElementById("materia").value;
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const nota3 = parseFloat(document.getElementById("nota3").value);
    const promedio = (nota1 + nota2 + nota3) / 3;
    
    if (promedio >= 3) {
      mensaje.innerText = `Felicidades ${name}, su promedio es ${promedio.toFixed(1)}, Pasaste ${materia}.`;
      mensaje.classList.remove("perdio");
      mensaje.classList.add("paso");
    } else {
      mensaje.innerText = `Lo sentimos ${name}, su promedio es ${promedio.toFixed(1)}, Perdiste ${materia}.`;
      mensaje.classList.remove("paso");
      mensaje.classList.add("perdio");
    }
});