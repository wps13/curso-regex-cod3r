// g- global - procura todas as ocorrencias
// i - ignore case - procura tanto maiusculas quanto minusculas

const txt = "Carolina assinou o abaixo-assinado"

console.log(txt.match(/C|ab/))

console.log(txt.match(/c|ab/i))

console.log(txt.match(/ab|c/gi))

