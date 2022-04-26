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

/* 3 FILTER */
function filtraPares(arr) {
  return arr.filter(callback);
}

function callback(item) {
  return item % 2 === 0;
}

const meuArray = [2, 5, 15, 6, 242];

console.log(filtraPares(meuArray));
