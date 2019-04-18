//No inicio:
// um byte(8 bits) = 256 caracteres
//simbolos, pontuacao, A-Z,a-z. 0-9

//dois bytes(16 bits) = 65500+
//mais simbolos

//Unicode
//Qntd de bytes variável - expansível
//suporta 1 Milhão+ caracteres

const txt = 'aʬcϖd'

//codigo do primeiro simbolo 02AC
//codigo do segundo simbolo 03D6
console.log(txt.match(/\u02AC|\u03D6/g))
