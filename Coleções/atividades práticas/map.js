function getAdmins(map)
{
	let admins = [];

	for([key, value] of map)
	{
		if(value === 'Admin')
		{
			admins.push(key)
		}
	}

	return admins;
}

const usuarios = new Map();

usuarios.set('Luiz', 'User');
usuarios.set('Jackes', 'Admin');
usuarios.set('Rodrigo', 'User');
usuarios.set('Pedro', 'User');
usuarios.set('Ana', 'Admin');

let admins = getAdmins(usuarios);

console.log(admins)