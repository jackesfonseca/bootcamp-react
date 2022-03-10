function verificaPalindromo(str)
{
	if(!str)
		return "String inexistente\n"

	return str.split("").reverse().join("") === str;
}

function verificaPalindromo2(str)
{
	if(!str)
		return "String inexistente\n"

	for(let i; i<str.length; i++)
	{
		if(str[i] !== str[str.length - 1 - i])
		{
			return false
		}
	}	

	return true
}

console.log(verificaPalindromo2("natan"))