// - дан массив чисел, найти четные числа в массиве и умножить эти числа на 2
let arr = [1, 2, 3, 4, 5, 6, 10];

for( let i = 0; i < arr.length; i++) {
  if(arr[i] % 2 === 0) {
    arr[i] = arr[i] * 2;
  }
}

console.log(arr);

