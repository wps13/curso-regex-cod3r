const txt = `
ca	r
r	o s!
`

console.log(txt.match(/ca/))

console.log(txt.match(/ca\tr/))

console.log(txt.match(/ca\tr\nr/))

console.log(txt.match(/ca\tr\nr\to\ss!/))
