var nome = "Bob" /* camel case */
let sobrenome = "Esponja" /* snake upper case */
const PI = 3.14159

var3 = "js"

console.log(sobrenome) 

var var3 /* hoisting */

function fullName(nome, sobrenome)
{
	return `Nome: ${nome} ${sobrenome}`
}

console.log(fullName(nome, sobrenome))

/* strings */
let concat = nome.concat(sobrenome)
let len = nome.length
let obj = new String(nome)
typeof obj
let sobrenome = nome + " " + sobrenome