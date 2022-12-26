// - поменять первый и последний элементы массива.
function newMassive(arr) {

  const firstNumber = arr[0];

  arr[0] = arr[arr.length - 1];
  arr[arr.length - 1] = firstNumber;

  return arr;
}

const myArr = [10, 11, 12, 13, 11, 15, 16, 11, 17];

const myResult = newMassive(myArr);

console.log(myArr);
console.log('Результат функции:', myResult); // [17, 11, 12, 13, 11, 15, 16, 11, 10]

