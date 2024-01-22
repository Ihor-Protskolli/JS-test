// Number guessing game

const minNum = 50;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;
let guess;
let running = true;

while (running) {
  guess = window.prompt(`Guess a number between ${minNum} and ${maxNum} : `);
  guess = Number(guess);

  if (isNaN(guess)) {
    window.prompt("Please enter a vaild number");
  } else if (guess < minNum || guess > maxNum) {
    window.prompt("Please enter a vaild number");
  } else {
    attempts++;
    if (guess < answer) {
      window.alert("TOO LOW! TRY AGAIN!");
    } else if (guess > answer) {
      window.alert("TOO HIGH! TRY AGAIN!");
    } else {
      window.alert(`CORRECT! The answer was ${answer}. It took you ${attempts} attempt(s) to guess`);
      running = false;
    }
  }
}
