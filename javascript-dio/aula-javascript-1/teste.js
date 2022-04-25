// var preco = 0
// var desconto = 0.2
// preco = preco - desconto;
// console.log(preco)

// function soma(a, b) {
//   return a + b;
// }
// soma(3, 5);

// console.log("Hello world!");

function returnEvenValues(array) {
  let evenNums = [];
  for(let i = 0; i < array.length; i++) {
    if(array[i] % 2 === 0) {
      evenNums.push(array[i]);
    }
  }
  console.log("os números pares são: ", evenNums);
}

let array = [1, 2, 4, 5, 7, 8];

returnEvenValues(array);