const texto1 = 'De longe eu avistei o fogo e uma pessoa gritando:FOGOOOO!'

const texto2 = "There is a big fog in NYC"

// * -> um ou mais ocorrencias

const regex = /fogo+/gi

console.log(texto1.match(regex))

console.log(texto2.match(regex))

const texto3= 'os números: 0123456789.'

const regex2 = /[0-9]/g

const regex3 = /[0-9]+/g

console.log(texto3.match(regex2))

console.log(texto3.match(regex3))
