// - есть массив [1, 2, 3, 4, 5, 6, 7] надо его перевернуть, чтобы он стал [7, 6, 5, 4, 3, 2, 1]
// Без создания второго массива.

function invertedArray(arr) {
  arr.reverse();
  return arr;
}

const myArr = [1, 2, 3, 4, 5, 6, 7];

const myResult = invertedArray(myArr);

console.log(myArr);
console.log('Результат функции:', myResult); // [7, 6, 5, 4, 3, 2, 1]
////////////////////////////////////////////////////////////////////////////////////////////////////////
// - есть массив [1, 2, 3, 4, 5, 6, 7] надо его перевернуть, чтобы он стал [7, 6, 5, 4, 3, 2, 1]
// Без создания второго массива(этот вариант именно для моей задачи!!!)

function invertedArray(arr) {

  const firstNumber = arr[0];
  arr[0] = arr[arr.length - 1];
  arr[arr.length - 1] = firstNumber;

  const secondNumber = arr[1];
  arr[1] = arr[5];
  arr[5] = secondNumber;

  const thirdNumber = arr[2];
  arr[2] = arr[4];
  arr[4] = thirdNumber;

  return arr;
}

const myArr = [1, 2, 3, 4, 5, 6, 7];

const myResult = invertedArray(myArr);

console.log(myArr);
console.log('Результат функции:', myResult); // [7, 6, 5, 4, 3, 2, 1]
////////////////////////////////////////////////////////////////////////////////////////////////
// - есть массив [1, 2, 3, 4, 5, 6, 7] надо его перевернуть, чтобы он стал [7, 6, 5, 4, 3, 2, 1]
// Без создания второго массива(УНИВЕРСАЛЬНЫЙ МЕТОД ДЛЯ ЛЮБОЙ ДЛИНЫ МАССИВА)
function invertedArray(arr) {

  for (let i = 0; i < arr.length / 2; i++) {
    const firstNumber = arr[i];

    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = firstNumber;
  }

  return arr;
}

const myArr = [1, 2, 3, 4, 5, 6, 7];

const myResult = invertedArray(myArr);

console.log(myArr);
console.log('Результат функции:', myResult); // [7, 6, 5, 4, 3, 2, 1]
////////////////////////////////////////////////////////////////////////////////////////////////
// - есть массив [1, 2, 3, 4, 5, 6, 7] надо его перевернуть, чтобы он стал [7, 6, 5, 4, 3, 2, 1]
// Без создания второго массива(УНИВЕРСАЛЬНЫЙ МЕТОД ДЛЯ ЛЮБОЙ ДЛИНЫ МАССИВА)
function invertedArray(arr) {
  let i = 0;

  while (i < arr.length / 2) {
    const firstNumber = arr[i];

    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = firstNumber;

    i++;
  }

  return arr;
}

const myArr = [1, 2, 3, 4, 5, 6, 7];

const myResult = invertedArray(myArr);

console.log(myArr);
console.log('Результат функции:', myResult); // [7, 6, 5, 4, 3, 2, 1]
/////////////////////////////////////////////////////////////////////////////////////////////////
// - есть массив [1, 2, 3, 4, 5, 6, 7] надо его перевернуть, чтобы он стал [7, 6, 5, 4, 3, 2, 1]
// Без создания второго массива(УНИВЕРСАЛЬНЫЙ МЕТОД ДЛЯ ЛЮБОЙ ДЛИНЫ МАССИВА)
// ЧЕРЕЗ ЦИКЛ do...while

// do {
// тело цикла
// } while (condition);
function invertedArray(arr) {
  let i = 0;

  do {
    const firstNumber = arr[i];

    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = firstNumber;

    i++;

  } while (i < arr.length / 2)

  return arr;
}

const myArr = [1, 2, 3, 4, 5, 6, 7];

const myResult = invertedArray(myArr);

console.log(myArr);
console.log('Результат функции:', myResult); // [7, 6, 5, 4, 3, 2, 1]
// - есть массив [1, 2, 3, 4, 5, 6, 7] надо его перевернуть, чтобы он стал [7, 6, 5, 4, 3, 2, 1]
// С созданием второго массива
function invertedArray(arr) {
  const arrNew = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    arrNew.push(arr[i]);
  }

  return arrNew;
}

const myArr = [1, 2, 3, 4, 5, 6, 7];

const myResult = invertedArray(myArr);

console.log(myArr);
console.log('Результат функции:', myResult); // [7, 6, 5, 4, 3, 2, 1]
