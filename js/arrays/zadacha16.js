// - дан массив чисел - нужно найти среднее значение четных чисел в этом массиве
let arr = [1, 2, 3, 4, 5];

let sum = 0;
let total = 0; // хранилище четных чисел(количество)

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    sum = sum + arr[i];
    total = total + 1;
  }
}

let result = sum / total;

console.log(result);

