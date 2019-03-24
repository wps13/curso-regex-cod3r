const txt = '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f'

const regexNove = RegExp('9')

console.log('Métodos da RegExp...')
console.log(regexNove.test(txt))//retorna um booleano que indica se o regex está presente no que foi dado com input
console.log(regexNove.exec(txt))//retorna um array com o primeiro elem. encontrado como, posicao e outras infos 

const regexLetras = /[a-f]/g

console.log('Métodos da string...')
console.log(txt.match(regexLetras)) //procura a regex passada, retornando o indice e o input
console.log(txt.search(regexLetras)) //retorna o a posição do primeiro elemento encontrado
console.log(txt.replace(regexLetras, 'Achei')) //substitui o que procura pelo segundo parametro
console.log(txt.split(regexLetras))

