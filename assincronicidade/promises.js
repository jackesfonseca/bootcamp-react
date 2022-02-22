/*
Objeto de processamento assíncrono. Inicialmente, seu valor é desconhecido. 
Ela po, então, ser resolvida ou rejeitada. Ela tem três estados:
	1 -  Pendente
	2 - Completada
	3 - Rejeitada
*/

const myPromise = new Promise((resolve, reject) => {
	window.setTimeout(() => 
	{
		resolve(console.log("Resolvida"));
	}, 2000);
});

await myPromise
	.then((result) => result + ' passando pelo then')
	.then((result) => result + ' e agora acabou!')
	.catch((err) => console.log(err.message));

/*Após 2 segundos irá retornar o valor*/
