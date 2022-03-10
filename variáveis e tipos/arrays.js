let arr = []
//let arr = new Array()

// insere no final
arr.push(1) 
arr.push(2)
arr.push(3)

// remove do final
arr.pop()
arr.pop()

// insere no incio
arr.unshift(4)
arr.unshift(5)
arr.unshift(6)

//remove do início
arr.shift();
arr.shift();

// métodos do array
arr.length()
arr.includes(3) // verifica se o valor está incluso
arr.every(item => item === 5)
arr.some(item => item === 5)
arr.reverse() //reverte todos os argumentos
