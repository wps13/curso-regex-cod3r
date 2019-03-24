const txt='1,2,3,4,5,6,a.b c!d?e'

const regexVirgula = /,/

console.log(txt.split(regexVirgula))

console.log(txt.match(/,/g))
console.log(txt.match(/A/g))
console.log(txt.match(/A/gi))
console.log(txt.match(/2/g))
console.log(txt.match(/b c!d/))
