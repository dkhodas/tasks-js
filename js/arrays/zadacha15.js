// -  дан массив чисел(рост учеников в сантиметрах), нужно создать другой массив, состоящий из учеников, рост которых больше, чем рост самого высокого ученика минус 20 сантиметров
let arr = [110, 135, 140, 145, 160, 100];

let result = [];
let max = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}

let target = max - 20;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > target) {
    result.push(arr[i]);
  }
}

console.log(result);

