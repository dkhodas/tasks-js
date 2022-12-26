// - найти MAX-ый элемент массива
const arr1 = [110, 120, 90, 190, 60, 208];

// //arr.sort((a,b) => b-a);
// //console.log(arr[0]);

let max = arr1[0];

for (let i = 1; i < arr1.length; i++) {
  const child = arr1[i];
  if (child > max) {
    max = child;
  }
}

console.log(max);
//////////////////////////////////////////////////
// - найти MIN-ый элемент массива
const arr2 = [110, 120, 90, 190, 60, 208];

let min = arr2[0];

for (let i = 1; i < arr2.length; i++) {
  const child = arr2[i];
  if (child < min) {
    min = child;
  }
}

console.log(min);
//////////////////////////////////////////////////
// - найти минимальный элемент в массиве
const arr = [2, 4, 6, 10];

let min = arr[0];

for(let i = 1; i < arr.length; i++) {

  if(arr[i] < min) {
  min = arr[i];
  }
}

console.log(min);
//////////////////////////////////////////////////
// - найти максимальный элемент в массиве
const arr = [2, 4, 6, 10];

let max = arr[0];

for(let i = 1; i < arr.length; i++) {

  if(arr[i] > max) {
    max = arr[i];
  }
}

console.log(max);
//////////////////////////////////////////////////
// - найти индекс минимального элемента массива
const arr = [2, 4, 6, 10];

let minIndex = 0;
let min = arr[minIndex];

for (let i = 1; i < arr.length; i++) {
  if(arr[i] < min) {
  min = arr[i];
  minIndex = i;
  }
}

console.log(minIndex);
/////////////////////////////////////////////////
// - найти индекс максимального элемента массива
const arr = [2, 4, 6, 10];

let maxIndex = 0;
let max = arr[maxIndex];

for(let i = 1; i < arr.length; i++) {

  if(arr[i] > max) {
  max = arr[i];
  maxIndex = i;
  }
}

console.log(maxIndex);
