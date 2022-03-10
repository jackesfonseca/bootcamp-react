const user = 
{
	id: 42,
	displayName: "jFons",
	fullName:
	{
		firstName: "Jackes",
		lastName: "Fonseca"
	}
};

function userId({id})
{
	return id;
}

function userFullName({fullName: {firstName: first, lastName: last}})
{
	return `${first} ${last}`;
}

console.log(`ID: ${userId(user)}, Full Name: ${userFullName(user)}`);