/* OBS.: arrow function não fazem hoisting e caso tetne será dado erro de referência */

const helloWorld1 = function()
{
	return "Hello World 1";
}

const helloWorld2 = () => 
{ 
	return "Hello World 2";
}

const helloWorld3 = () => {"Hello world 3"}; /* quando há uma linha return implícito */

const soma1 = (a, b) => a + b;

const soma2 = raio => 3.1415 * raio * raio; /* quando for passado um parâmetro os parênteses do argumento ficam implícito */