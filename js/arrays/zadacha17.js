// - дан массив, найти сколько раз встречается число 2 в массиве
let arr = [1, 2, 3, 2, 5];

let result = 0; //количество наших чисел 2

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 2) {
    result = result + 1;
  }
}

console.log(result);

