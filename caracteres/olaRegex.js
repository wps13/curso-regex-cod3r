const txt='Casa bonita é casa amarela da esquina com a Rua ACASALAR'

const regex=/casa/gi

console.log(txt.match(regex))

const regex2=/casa/g
console.log(txt.match(regex2))

const regex3=/casa/
console.log(txt.match(regex3))

console.log(txt.match(/a b/))
