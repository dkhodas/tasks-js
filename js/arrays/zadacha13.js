// -
let arr = [110, 135, 140, 145, 160, 100];

let number = arr.length;
let sum = 0;


for (let i = 0; i < arr.length; i++) {
  sum = sum + arr[i];
}

let average = sum / number;

let result = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > average) {
    result.push(arr[i]);
  }
}

console.log(result);

