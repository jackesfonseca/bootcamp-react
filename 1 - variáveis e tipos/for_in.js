/* loop entre os elementos iteráveis de um objeto */

const obj = {
	name = "Jackes",
	age = 20,
	city = "Brasília" 
}

function forIn(obj)
{
	for(prop in obj)
		console.log(prop);
		//console.log(obj[prop]);
}