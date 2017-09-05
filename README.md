# Platzom

Platzom es un idioma inventado para el [Curso de fundamentos de JS](https://platzi.com/js) de Platzi

## Descripción del idiom

- Si la palabra terminar en "ar", se le quitan los dos caracteres del final
- Si la palabra se inicia con "Z", se le añade "pe" al final
- Si la palabra traducida tiene 10 o más letras, se debe partir por la mitad con un (-)
- Si la palabra original es un 'Palídromo' (se lee igual de izquierda a derecha que de derecha a izquierda) ninguna regla de las anteriores cuenta, y devuelve la misma palabra pero intercalando mayúsculas y minúsculas como en "Camelcase"

## Instalación

```
npm install platzom
```

## Uso

```
import platzom from 'platzom'

console.log(platzom('Programar'));
console.log(platzom('Zorro'));
console.log(platzom('Zarpar'));
console.log(platzom('abecedario'));
console.log(platzom('sometemos'));
```

## Créditos

[Alberto Corella](https://github.com/estokari/)

## Licencia

[MIT](https://opensource.org/licenses/MIT)
