const txt='1,2,3,4,5,6,a.b c!d?e[f'

console.log(txt.match(/[a-z]/g))

console.log(txt.match(/[b-d]/g))

console.log(txt.match(/[2-4]/g))

console.log(txt.match(/[A-Z1-3]/gi))
