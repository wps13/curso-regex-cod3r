const txt = '.$+*?-'

//Boa partes dos metacaracteres são literais dentro do conjunto

console.log(txt.match(/[+.?*$]/g))

console.log(txt.match(/[.]/))

console.log(txt.match(/[+.?*$]./g)) //Não precisa de escape dentro do conjunto

console.log(txt.match(/[$-?]/g)) //isso é um intervalo(Range)

//Não são intervalos
console.log(txt.match(/[$\-?]/g))

console.log(txt.match(/[-?]/g))

