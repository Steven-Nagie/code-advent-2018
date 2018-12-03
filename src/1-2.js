import input from './1-1.input.js';

const answerSet = new Set([0]);
let current = 0;

function loop(input, repeat) {
  for (let num of input) {
    current += num;
    if (answerSet.has(current)) {
      console.log(current);
      repeat = false;
      break;
    } else {
      answerSet.add(current);
    }
  }
  if (repeat) {
    loop(input, true);
  }
}

loop(input.inputArr, true);