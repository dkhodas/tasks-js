// - дан массив чисел, найти минимальный элемент массива, а все остальные числа массива, кроме минимального, необходимо умножить на 2
let arr = [2, 4, 5, 6, 7, 8];

let min = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] < min) {
    min = arr[i];
  }
}

for (let i = 0; i < arr.length; i++) {
  if (arr[i] !== min) {
    arr[i] = arr[i] * 2;
  }
}

console.log(min);
console.log(arr);

