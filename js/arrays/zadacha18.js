// - дан массив чисел - найти среднее значение чисел, которые при делении на 3 в остатке имеют 2
let arr = [1, 2, 5, 8, 11];

let sum = 0;
let total = 0; // количество

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 3 === 2) {
    total = total + 1;
    sum = sum + arr[i];
  }
}

let result = sum / total;

console.log(result);

