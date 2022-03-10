/* set - coleção que armazena valores únicos */

/*
set vs array

Possui valores únicos
Em vez da propriedade length, consulta-se o número 
de registros pela propriedade size
não possui os métodos map, filter, reduce, etc
*/

const mySet = new Set();

mySet.add(1);
mySet.add(5);

mySet.has(1);

mySet.delete(5);