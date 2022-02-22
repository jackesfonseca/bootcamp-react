/*
async define funções assíncronas
*/

async function resolvePromise()
{
	const myPromise = new Promise((resolve, reject) => {
		window.setTimeout(() => {
			resolve('Resolvida');
		}, 3000);
	});

	const resolved = await myPromise
		.then((result) => result + ' paassando pelo then')
		.then((result) => result + ' e agora acabou!')
		.then((err) => console.log(err.message));

	return resolved;
}
