// 1)

var numLlamadas = 0;
function calculaBinomio(a, b) {
  {
    var cuadradoDeA = a * a;
    var cuadradoDeB = b * b;
    numLlamadas++;
  }
  return cuadradoDeA + cuadradoDeB + 2 * a * b;
}

alert(calculaBinomio(2, 3)); // 25
alert(calculaBinomio(4, 5)); // 81
alert(numLlamadas); // 2
alert(typeof cuadradoDeA); // undefined

// en el ultimo caso, la respuesta del alert se da por que la variable "cuadradoDeA" 
// no existe fuera del ambito de la funcion calculaBinomio y por eso su valor es indefinido

// 2)
