//functions = block of reusable code

// function happyBirthday(username, age) {
//     console.log("Happy Birthday to you");
//     console.log("Happy Birthday to you");
//     console.log(`Happy Birthday dear ${username}`);
//     console.log("Happy Birthday to you");
//     console.log("Happy Birthday to you");
//     console.log(`You are ${age} years old`);
// }

// happyBirthday("Bro", 19);
// happyBirthday("SpongeBob", 14);

function add(x, y) {
  let result = x + y;
  return result;
}
let answer = add(5, 7);
console.log(answer);
//-----------------------------------------------
function subtract(x, y) {
  return x - y;
}
console.log(subtract(9, 4));
//-----------------------------------------------
function multiply(x, y) {
  return x * y;
}
console.log(multiply(5, 5));
//-----------------------------------------------
function divide(x, y) {
  return x / y;
}
console.log(divide(81, 9));
//-----------------------------------------------
function isEven(number) {
  return number % 2 === 0 ? true : false;
  // if (number % 2 === 0) {
  //     return true;
  // }
  // else {
  //     return false;
  // }
}
console.log(isEven(6));
//-----------------------------------------------
function isValidEmail(email) {
  return email.includes("@") ? true : false;
}
console.log(isValidEmail("Bro@fake.com"));
//-----------------------------------------------
