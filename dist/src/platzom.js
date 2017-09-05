'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = platzom;
function platzom(str) {

  var translation = str;

  //Si la palabra terminar en "ar", se le quitan los dos caracteres del final
  if (str.toLowerCase().endsWith('ar')) {

    translation = str.slice(0, -2);
  }

  //Si la palabra se inicia con "Z", se le añade "pe" al final
  if (str.toLowerCase().startsWith('z')) {
    translation += 'pe';
  }

  //Si la palabra traducida tiene 10 o más letras, se debe partir por la mitad con un (-)
  var tLenght = translation.length;
  if (tLenght >= 10) {

    var firstHalf = translation.slice(0, Math.round(tLenght / 2));
    var secondHalf = translation.slice(Math.round(tLenght / 2));
    translation = firstHalf + '-' + secondHalf;
  }

  //Si la palabra original es un 'Palídromo' (se lee igual de izquierda a derecha que de derecha a izquierda)
  //ninguna regla de las anteriores cuenta, y devuelve la misma palabra pero intercalando mayúsculas y minúsculas
  //como en "Camelcase"
  var reverse = function reverse(str) {
    return str.split('').reverse().join('');
  };

  function minMay(str) {
    var l = str.length;
    var translation = '';
    var capitalize = true;

    for (var i = 0; i < l; i++) {
      var char = str.charAt(i);
      translation += capitalize ? char.toUpperCase() : char.toLowerCase();
      capitalize = !capitalize;
    }

    return translation;
  }

  if (str == reverse(str)) {
    return minMay(str);
  }

  return translation;
}

console.log(platzom('Programar'));
console.log(platzom('Zorro'));
console.log(platzom('Zarpar'));
console.log(platzom('abecedario'));
console.log(platzom('sometemos'));