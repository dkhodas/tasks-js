// - дан массив чисел - нужно вывести второй массив нечетных чисел
let arr = [110, 135, 140, 145, 160, 100];

let result = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 1) {
    result.push(arr[i]);
  }
}

console.log(result);

