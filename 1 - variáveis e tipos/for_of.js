/* loop entre os estruturas iteráveis de um objeto */

const palavra = "abacaxi";
const num = [1, 2, 3]; // também pode ser passado como argumento

function forOf(palavra)
{
	for(letra of palavra)
		console.log(letra);
}