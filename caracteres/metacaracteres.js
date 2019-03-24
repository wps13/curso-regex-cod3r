// . ? * + - ^$ | [ ] { } ( ) \ :

const txt = '1,2,3,4,5,6,a.b c!d?e'

//procura o ponto e não o metacaractere
const regexPonto = /\./g

console.log(txt.split(regexPonto))

//metacaracteres necessitam do pipe
const regexSimbolos = /,|\.|\?|!| /g

console.log(txt.split(regexSimbolos))


