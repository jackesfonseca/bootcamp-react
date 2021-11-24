/* combina os argumentos em um array */

function confereTamanho(...args)
{
	console.log(args.length);
}

confereTamanho(); // tam == 0
confereTamanho(1 , 2); // tam == 2
confereTamanho(3, 4, 5); //tam == 3