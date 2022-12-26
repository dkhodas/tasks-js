// - дан массив чисел, найти сумму чисел массива, которые имеют четный индекс
let arr = [110, 135, 140, 145, 160, 100];

let sum = 0;

for(let i = 0; i < arr.length; i++) {
  if(i % 2 === 0) {
    sum = sum + arr[i];
  }
}

console.log(sum);

