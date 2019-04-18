const texto='1,2,3,4,5,6,a.b c!d?e[f'

const regextPares =/[02468]/g

console.log(texto.match(regextPares))

const txt2 = 'João não vai passear na moto'

const regexComESemAcento = /n[aã]/g

console.log(txt2.match(regexComESemAcento))
