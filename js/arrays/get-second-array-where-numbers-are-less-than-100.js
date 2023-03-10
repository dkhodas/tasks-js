//  - есть массив чисел - получить второй массив из первого, оставив только числа меньше 100.
const arr13 = [95, 120, 90, 190, 60, 208];

for (let i = 0; i < arr13.length; i++) {
  if (arr13[i] < 100) {
    console.log(arr13[i]);
    // выводятся просто числа!
    // 95
    // 90
    // 60
  }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ЧЕРЕЗ ЦИКЛ For
// - есть массив чисел - получить второй массив из первого, оставив только числа меньше 100.
const arr14 = [95, 120, 90, 190, 60, 208];

function newMassive() {
  const arrNew = [];

  for (let i = 0; i < arr14.length; i++) {
    if (arr14[i] < 100) {
      arrNew.push(arr14[i]);
    }
  }
  console.log(arrNew); // результат [95, 90, 60]
}

newMassive();
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ЧЕРЕЗ ЦИКЛ While
// - есть массив чисел - получить второй массив из первого, оставив только числа меньше 100.
const arr15 = [95, 120, 90, 190, 60, 208];

let i = 0;
let arrNew = [];

while (i < arr15.length) {
  if (arr15[i] < 100) {
    arrNew.push(arr15[i]);
  }
  i++;
}

console.log(arrNew); // результат [95, 90, 60]
// ЧЕРЕЗ ЦИКЛ do...while
// - есть массив чисел - получить второй массив из первого, оставив только числа меньше 100.
const arr16 = [95, 120, 90, 190, 60, 208];
let i = 0;
let arrNew = [];

function massive() {
  if (arr16.length === 0) {
    console.log(arrNew);
    return;
  }
  do {
    if (arr16[i] < 100) {
      arrNew.push(arr16[i]);
    }
    i++;
  } while (i < arr16.length);
}

massive();
console.log(arrNew); // результат [95, 90, 60]
