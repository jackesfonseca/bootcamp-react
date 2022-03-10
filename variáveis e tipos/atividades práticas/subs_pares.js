function subsPares(arr)
{
	if(!arr)
		return "Array inválido"

	for(let i=0; i<arr.length; i++)
	{
		if(arr[i] === 0)
			console.log("Você já é zero!\n");
		else if(arr[i]%2 === 0)
		{
			console.log(`substituindo ${arr[i]} por 0\n`)
			arr[i] = 0
		}
	}

	return arr
}

let arr = [1, 2, 4, 6, 80, 33, 90, 23]
console.log(subsPares(arr))