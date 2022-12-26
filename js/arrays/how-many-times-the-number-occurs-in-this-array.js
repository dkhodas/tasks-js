// - дан массив чисел и число (в переменной отдельной).
// функция должна вывести сколько раз число встречается в этом массиве.

let arr1 = [10, 11, 12, 10, 13, 10, 14, 15, 10, 16];
let number = 10;

const arrNew = [];

function arrayLength() {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === number) {
      arrNew.push(arr1[i]);
    }
  }
}

arrayLength();
console.log(arrNew); // результат [10, 10, 10, 10]
console.log(arrNew.length); // 4
///////////////////////////////////////////////////////////////////////////////////////////////////////////
// теперь решение задачи без создания второго массива
let arr2 = [10, 11, 12, 10, 13, 10, 14, 15, 10, 16];
let number = 10;

function arrayLength() {
  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] === number) {
      console.log(arr2.length); // 4 - эту цифру выводит браузер, а надо чтобы я!!! (это не совсем верно!)
    }
  }
}

arrayLength();
//////////////////////////////////////////////////////////////////////////////////////////////////////////
let arr3 = [10, 11, 12, 10, 13, 10, 14, 15, 10, 16];
let number = 10; // это число из условия задачи

let countElements = 0; // создана переменная. Сюда будем складывать нашу найденную цифру 10.

function arrayLength() {
  for (let i = 0; i < arr3.length; i++) {
    if (arr3[i] === number) {
      countElements++;
    }
  }
}

arrayLength();
console.log(countElements); // результат: 4
/////////////////////////////////////////////////////////////////////////////////////////////////////////
// ЧЕРЕЗ ЦИКЛ While
let arr4 = [10, 11, 12, 10, 13, 10, 14, 15, 10, 16];
let number = 10;

let i = 0;
let countElements = 0;

let arrayLength = () => {

  while (i < arr4.length) {
    if (arr4[i] === number) {
      countElements++;
    }
    i++;
  }
}

arrayLength();
console.log(countElements); // результат 4
////////////////////////////////////////////////////////////////////////////////////////////////////////
// ЧЕРЕЗ ЦИКЛ do...while

// do {
// тело цикла
// } while (condition);

let arr5 = [10, 11, 12, 10, 13, 10, 14, 15, 10, 16];
let number = 10;

let i = 0;
let countElements = 0;

let arrayLength = () => {

  do {
    if (arr5[i] === number) {
      countElements++;
    }
    i++;
  } while (i < arr5.length);
}

arrayLength();
console.log(countElements); // результат 4
