// - Есть массив слов, вернуть массив слов, где только слова с буквой о.
// - let Myarr = ['молоко', 'мир', 'кот', 'река', 'море', 'сон', 'магазин'];

function sortArray(arr, letter) {
  const arrNew = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].split('').includes(letter)) {
      arrNew.push(arr[i]);
    }
  }

  return arrNew;
}

const myArr = ['молоко', 'мир', 'кот', 'река', 'море', 'сон', 'магазин'];
const myLetter = 'о'; // по условию задачи, это та буква в словах, которую будем искать в нашем массиве.

const myResult = sortArray(myArr, myLetter);

console.log(myArr, myLetter);
console.log('Результат функции:', myResult); // []
