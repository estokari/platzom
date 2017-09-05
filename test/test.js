
const expect = require('chai').expect
const platzom = require('..').default

describe('#platzom',function(){

  it('Si la palabra terminar en "ar", se le quitan los dos caracteres del final', function(){
    const translation = platzom('Programar');
    expect(translation).to.equal('Program');
  })

  it('Si la palabra se inicia con "Z", se le añade "pe" al final', function(){
    const translation = platzom('Zorro');
    const translation2 = platzom('Zarpar');

    expect(translation).to.equal('Zorrope');
    expect(translation2).to.equal('Zarppe');
  })

  it('Si la palabra traducida tiene 10 o más letras, se debe partir por la mitad con un (-)', function(){
    const translation = platzom('abecedario');
    expect(translation).to.equal('abece-dario');
  })

  it('Si la palabra original es un "Palídromo" (se lee igual de izquierda a derecha que de derecha a izquierda) ninguna regla de las anteriores cuenta, y devuelve la misma palabra pero intercalando mayúsculas y minúsculas como en "Camelcase"', function(){
    const translation = platzom('sometemos');
    expect(translation).to.equal('SoMeTeMoS');
  })

})
