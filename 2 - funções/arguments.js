/* função com n arg (não é especificado a quantidade dentro dos parênteses) */

function qtdArgs()
{
	let max = -Infinity;

	for(let i=0; i<arguments.length; i++)
	{
		if(arguments[i] > max)
		{
			max = arguments[i];
		}
	}

	return max;
}

function mostraArgs()
{
	return arguments;
}