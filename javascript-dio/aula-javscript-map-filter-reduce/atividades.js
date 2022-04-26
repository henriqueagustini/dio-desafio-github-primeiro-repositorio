/* 1 MAP

const orange = {
  price: 2
};

const apple = {
  price: 1.5
};

function mapArray() {
  const array = [1, 2, 3, 4, 5];

  return array.map(function (item) {
    return item * this.price;
  }, apple);
}

console.log(mapArray());
*/

/*  2 MAP

function mapSemThis(arr) {
  return arr.map(function (item) {
    return item * 2;
  });
}

const nums = [2, 5, 15, 6, 242];

console.log(mapSemThis(nums));
*/

/* 3 FILTER
function filtraPares(arr) {
  return arr.filter(callback);
}

function callback(item) {
  return item % 2 === 0; //!== para tirar números ímpares
}

const meuArray = [2, 5, 15, 6, 242];

console.log(filtraPares(meuArray));
*/

/* 4 Reduce 
function somaNumeros(arr) {
	if (!arr || !arr.length) return;
	const soma = arr.reduce((prev, curr) => prev + curr);

	return soma;
}

console.log(somaNumeros([1, 1, 1, 3]));

*/
/* CALCULA SALDO 

function calculaSaldo(saldo, itens) {
	if (!saldo || !itens || !itens.length) return 'Envie todos os parâmetros';

	const saldoFinal = itens.reduce((acc, item) => acc - item.preco, saldo);

	return `O saldo final será de ${saldoFinal} reais`;
}

lista = [
	{
		preco: 2,
		nome: 'maçã',
	},
	{
		preco: 30,
		nome: 'roupa',
	},
	{
		preco: 25,
		nome: 'carne',
	},
];

saldo = 100;

console.log(calculaSaldo(saldo, lista));
*/

let array = [1, 2, 3, 4];

array.reduce((current, acc) => current + acc);
