// ДОМАШНЯЯ РАБОТА НА ВТОРНИК!(27.12.22г)

// - поиск минимального элемента
let arr = [5, 6, 7, 8, 10, 15];

let min = arr[0];

for(let i = 1; i < arr.length; i++) {
  if(arr[i] < min) {
    min = arr[i];
  }
}

console.log(min);

// через цикл while
let arr = [5, 6, 7, 8, 10, 15];

let i = 1;

while(i < arr.length) {
let min = arr[0];
  if(arr[i] < min){
    min = arr[i];
  }
  i++;
}

console.log(min);
/////////////////////////////////////
// - сколько раз число 5 встречается в массиве
let arr = [5, 6, 7, 8, 5, 15, 5];

let result = 0; // наше хранилище. Сюда запишем количество наших найденных чисел 5

for(let i = 0; i < arr.length; i++) {
 if(arr[i] === 5) {
   result = result + 1;
 }
}

console.log(result);

// через цикл while
let arr = [5, 6, 7, 8, 5, 15, 5];

let result = 0; // наше хранилище. Сюда запишем количество наших найденных чисел 5
let i = 0;

while(i < arr.length){
  if(arr[i] === 5){
   result = result + 1;
  }
  i++;
}

console.log(result);
/////////////////////////////////////
// - дан массив чисел, сформировать другой массив, состоящий из чисел, значения которых больше среднего значения по массиву, вывести этот массив
let arr = [1, 3, 5, 7, 8, 9, 10];

let newArr = [];
let sum = 0;

for(let i = 0; i < arr.length; i++){
  sum = sum + arr[i];
}

let average = sum / arr.length; // так найдем среднее значение чисел массива

for(let i = 0; i < arr.length; i++) {
  if(arr[i] > average){
  newArr.push(arr[i]);
  }
// прогоним пустой массив и убедимся, что программа работает корректно!!!
// (эту проверку я выполняю так как если будет пустой массив, то в average = sum / arr.length arr.length равно 0, а на 0 нельзя делить)
  if(arr.length === 0){
    console.log(newArr);
  }
}

console.log(newArr); // результат [7, 8, 9, 10]

