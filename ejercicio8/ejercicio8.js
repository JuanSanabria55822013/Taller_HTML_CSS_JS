function identifyIntegers() {
    var input = document.getElementById("numeros").value;
    var numeros = input.split(",");
    var resultado = document.getElementById("resultado");
    var output = "";
  
    for (var i = 0; i < numeros.length; i++) {
      var num = parseFloat(numeros[i]);
      if ((num % 1 == 0)) {
        if (num % 2 === 0) {
            output += "<span class='par'>" + num + " es un número par</span><br>";
          } else {
            output += "<span class='impar'>" + num + " es un número impar</span><br>";
          }
      } else {
        output += "<span class='error'>" + numeros[i] + " no es un número entero</span><br>";
      }
  
    resultado.innerHTML = output;
  }
}
