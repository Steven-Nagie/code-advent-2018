import input from './day-two.input';

function dayTwo(input) {

  input.sort();

  for (let i = 0; i < input.length; i++) {
    let string1 = input[i];
    for (let j = i + 1; j < input.length; j++) {
      let string2 = input[j];
      let answer = '';
      string1.split('').forEach((letter, index) => {
        if (letter === string2.charAt(index)) {
          answer += letter;
        }
      });
      if (answer.length >= string1.length - 1) {
        return answer;
      }
    }
  }
}

console.log(dayTwo(input.inputArr));

export { dayTwo };