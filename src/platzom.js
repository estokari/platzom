export default function platzom(str){

  let translation = str;

  //Si la palabra terminar en "ar", se le quitan los dos caracteres del final
  if(str.toLowerCase().endsWith('ar')){

    translation = str.slice(0,-2);

  }

  //Si la palabra se inicia con "Z", se le añade "pe" al final
  if(str.toLowerCase().startsWith('z')){
    translation += 'pe';
  }

  //Si la palabra traducida tiene 10 o más letras, se debe partir por la mitad con un (-)
  const tLenght = translation.length;
  if(tLenght >= 10){

    const firstHalf = translation.slice(0,Math.round(tLenght / 2));
    const secondHalf = translation.slice(Math.round(tLenght / 2));
    translation = `${firstHalf}-${secondHalf}`;

  }

  //Si la palabra original es un 'Palídromo' (se lee igual de izquierda a derecha que de derecha a izquierda)
  //ninguna regla de las anteriores cuenta, y devuelve la misma palabra pero intercalando mayúsculas y minúsculas
  //como en "Camelcase"
  const reverse = (str) => str.split('').reverse().join('');

  function minMay(str){
    const l = str.length;
    let translation = '';
    let capitalize = true;

    for(let i = 0; i < l; i++){
      let char = str.charAt(i);
      translation += capitalize ? char.toUpperCase() : char.toLowerCase();
      capitalize = !capitalize;
    }

    return translation;

  }

  if(str == reverse(str)){
    return minMay(str);
  }

  return translation;

}

console.log(platzom('Programar'));
console.log(platzom('Zorro'));
console.log(platzom('Zarpar'));
console.log(platzom('abecedario'));
console.log(platzom('sometemos'));
