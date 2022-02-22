/*
API é uma forma de intermediar os resultados do back end com o que é
apresentado no front-end. É possível acessá-las por mieo de URL's
*/

fetch(url, options)
	.then(response => response.json())
	.then(json => console.log(json))

fetch('https://endereco-api.com/', {
	method: 'GET',
	cache: 'no-cache'
})
	.then(response => response.json())
	.then(response => console.log(json));

fetch('https://endereco-api.com/', {
	method: 'POST',
	cache: 'no-cache',
	body: JSON.stringft(data)
})	
	.then(response => response.json())
	.then(json => console.log(json))
