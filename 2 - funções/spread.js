/* uma forma de lidar separadamete com os elementos */

function sum(x, y, z)
{
	return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));