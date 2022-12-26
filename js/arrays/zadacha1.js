/* eslint-disable no-console */
//- есть массив, есть число.
// Найти число в массиве и вернуть на каком индексе оно находится, если его нет вернуть -1.
// Если таких чисел несколько - вернуть индекс положения первого такого числа. (Условие №2)

let arr1 = [10, 11, 12, 13, 14, 15, 16, 17];
let number = 11; // по условию задачи, это то число, которое будем искать в нашем массиве.

let result = 0; // создана переменная. Сюда будем записывать индекс нашей найденной цифры 11.

function numberInArray() {

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === number) {
      result = arr1.indexOf(number, 0);
    }
  }
}

numberInArray();
console.log(result);
/////////////////////////////////////////////////////////////////////////////////////////////////////////
function numberInArray(arr, number) {
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === number) {
      return i;
    }
  }
  return (-1);
}

const myArr = [10, 11, 12, 13, 11, 15, 16, 11, 17];
const myNumber = 11; // по условию задачи, это то число, которое будем искать в нашем массиве.

const myResult = numberInArray(myArr, myNumber); // передаю в функцию параметры

console.log(myArr, myNumber);
console.log('Результат функции:', myResult);
////////////////////////////////////////////////////////////////////////////////////////////////////////
function numberInArray(arr, number) {
  let result = -1; // это хранилище
  let i = 0;

  while (i < arr.length) {
    if (arr[i] === number) {
      result = i;
      break;
    }
    i++;
  }
  return result;
}

const myArr = [10, 11, 12, 13, 11, 15, 16, 11, 17];
const myNumber = 25; // по условию задачи, это то число, которое будем искать в нашем массиве.

const myResult = numberInArray(myArr, myNumber); // передаю в функцию параметры

console.log(myArr, myNumber);
console.log('Результат функции:', myResult);
////////////////////////////////////////////////////////////////////////////////////////////////////////
