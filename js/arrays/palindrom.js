// - Функция, которая переводит в верхний регистр
function MytoUpperCase(str) {
  let result = myWord.toUpperCase();
  return result;
}

const myWord = 'шалаш';

const myResult = MytoUpperCase(myWord);

console.log(myWord);
console.log('Результат функции:', myResult);
// - Написать функцию,которая проверяет, является ли слово ПАЛИНДРОНОМ.
// Функция принимает строку(которую я буду вводить), а возвращать булевское значение
function palindrome(str) {
  let newStr = str.toUpperCase();

  for (let i = 0; i < newStr.length / 2; i++) {
    if (newStr[i] !== newStr[newStr.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

const myWord = 'шалаш';

const myResult = palindrome(myWord);

console.log(myWord);
console.log('Результат функции:', myResult);
////////////////////////////////////////////////////////////////////////////////////////////
// - Написать функцию,которая проверяет, является ли слово ПАЛИНДРОНОМ.
// Функция принимает строку(которую я буду вводить), а возвращать булевское значение
function palindrome(str) {
  i = 0;
  while (i < str.length / 2) {
    if (str[i].toUpperCase() !== str[str.length - 1 - i].toUpperCase()) {
      return false;
    }
    i++;
  }
  return true;
}
///////////////////////////////////////////////////////////////////////////////////////////
// - Написать функцию,которая проверяет, является ли слово ПАЛИНДРОНОМ.
// Функция принимает строку(которую я буду вводить), а возвращать булевское значение
function palindrome(str) {
  i = 0;
  while (i < str.length / 2) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
    i++;
  }
  return true;
}

const myWord = 'шалаш';

const myResult = palindrome(myWord);

console.log(myWord);
console.log('Результат функции:', myResult);
//////////////////////////////////////////////////////////////////////////////////////////
// - Написать функцию,которая проверяет, является ли слово ПАЛИНДРОНОМ.
// Функция принимает строку(которую я буду вводить), а возвращать булевское значение

// do {
// тело цикла
// } while (condition);

function palindrome(str) {
  i = 0;
  do {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
    i++;
  } while (i < str.length / 2)
  return true;
}

const myWord = 'шалаш';

const myResult = palindrome(myWord);

console.log(myWord);
console.log('Результат функции:', myResult);

