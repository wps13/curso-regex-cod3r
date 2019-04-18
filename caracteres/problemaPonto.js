const txt = 'Bom\ndia'

console.log(txt.match(/./gi))

//ponto não engloba o \n
console.log(txt.match(/..../gi))
