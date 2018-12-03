import input from './day-two.input.js';

let twoTotal = 0;
let threeTotal = 0;

input.inputArr.forEach(id => {
  let letterMap = new Map();
  let two = false;
  let three = false;
  id.split('').forEach(letter => {
    if (letterMap.has(letter)) {
      letterMap.set(letter, letterMap.get(letter) + 1);
    } else {
      letterMap.set(letter, 1);
    }
  });
  for (let value of letterMap.values()) {
    if (value === 2) {
      two = true;
    } else if (value === 3) {
      three = true;
    }
  }
  if (two) {
    twoTotal += 1;
  }
  if (three) {
    threeTotal += 1;
  }
});

console.log(twoTotal * threeTotal);