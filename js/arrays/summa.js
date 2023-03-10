// - Найдем сумму элементов массива
// Метод reduce
// Метод reduce сворачивает массив к одному значению (редуцирует).
// К примеру, с помощью reduce можно легко найти сумму элементов массива (то есть массив сведется к одному значению - к сумме элементов).
// Первым параметром метод reduce получает функцию, которая последовательно выполнится для каждого элемента массива, начиная с первого.
// В эту функцию можно передавать 4 параметра. Если эти параметры есть (они не обязательны), то в первый автоматически попадет промежуточный результат, во второй попадет элемент массива, в третий - его номер в массиве (индекс), а в четвертый - сам массив.
// Промежуточный результат - это переменная, в которую будет накапливаться то значение, которое вернет метод reduce, когда переберет все элементы массива. К примеру, туда последовательно можно накапливать сумму элементов массива: сначала положить первый элемент, при следующем проходе цикла уже сумму первого элемента и второго, при следующем проходе - сумму первого, второго и третьего. И так, пока массив не закончится.
// Функция, которую принимает reduce, должна возвращать новое значение промежуточного результата.
// Вторым параметром метода reduce указывается начальное значение промежуточного результата. Если его не указать, то оно будет равно первому элементу массива, а обработка элементов начнется со второго элемента.

// СИНТАКСИС
// массив.reduce(function(промежуточный результат, элемент, индекс, массив) {
// 	return новый промежуточный результат;
// }, начальное значение);

// Найдем сумму элементов массива:
const arr3 = [110, 120, 90, 190, 60, 208];

const result = arr3.reduce((sum1, elem) => sum1 + elem, 0);

console.log(result); // Результат выполнения кода: 778

// Найдем сумму элементов массива ЧЕРЕЗ ЦИКЛ for:
const arr4 = [110, 120, 90, 190, 60, 208];

let summa = 0;
for (let i = 0; i < arr4.length; i++) {
  summa = summa + arr4[i];
}

console.log(summa); // Результат выполнения кода: 778

// Найдем сумму элементов массива ЧЕРЕЗ ЦИКЛ while:
// Цикл while имеет следующий СИНТАКСИС:
// while (condition) {
//   // код, код из тела цикла выполняется, пока условие condition истинно.
//   // также называемый "телом цикла"
// }

// Например, цикл ниже выводит i, пока i < 3:
// let i = 0;
// while (i < 3) { // выводит 0, затем 1, затем 2
//   alert( i );
//   i++;
// }

const arr5 = [110, 120, 90, 190, 60, 208];

let summ = 0;
let j = 0;
// let element = arr[j]; это здесь не нужно, потому что я это не использую!!!

while (j < arr5.length) {
  summ = summ + arr5[j];
  j = j + 1; // j - это порядковый номер элемента массива
  console.log(summ, j);
}

console.log(summ);

// Цикл «do…while»
// Проверку условия можно разместить под телом цикла, используя специальный СИНТАКСИС do..while:
// do {
// тело цикла
// } while (condition);
// Цикл сначала выполнит тело, а затем проверит условие condition, и пока его значение равно true, он будет выполняться снова и снова.
// Такая форма синтаксиса оправдана, если вы хотите, чтобы тело цикла выполнилось хотя бы один раз, даже если условие окажется ложным.

const arr6 = [110, 120, 90, 190, 60, 208];

let sum = 0;
let index = 0;

do {
  if (arr6.length === 0) {
    sum = 0;
    console.log(sum);
    // console.log(arr);
    // console.log(arr[0]);
    console.log('Массив пустой');
  } else {
    sum = sum + arr6[index];
    index = index + 1; // i - это порядковый номер элемента массива
    console.log(sum, index);
    console.log('В массиве есть что-то');
  }
} while (index < arr6.length);

console.log(sum);

