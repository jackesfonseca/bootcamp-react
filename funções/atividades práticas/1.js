const alunos = [
	{
		nome: "Ana",
		nota: 4,
		turma: "3a"
	},

	{
		nome: "Jackes",
		nota: 9,
		turma: "2c"
	},

	{
		nome: "João",
		nota: 5,
		turma: "1b"
	},

	{
		nome: "Luana",
		nota: 7,
		turma: "2c"
	},

	{
		nome: "Maycol",
		nota: 3,
		turma: "3a"
	},
];

function alunosAprovados(arr, media)
{
	let aprovados = [];

	for(let i=0; i<arr.length; i++)
	{
		const {nome, nota} = arr[i]; //object destructuring

		if(nota >= media)
		{
			aprovados.push(nome);
		}
	}

	return aprovados;
}

console.log(alunosAprovados(alunos, 5));