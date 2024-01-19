// If statements

// let age = 25;

// if (age >= 18) {
//   console.log("You are old enough to enter this site");
// } else {
//   console.log("You're too young to enter this site");
// }

//----------------------------------------------------

// let time = 14;

// if (time < 12) {
//   console.log("Good morning!");
// } else {
//   console.log("Good afternoon!");
// }

//----------------------------------------------------

// let isStudent = false;

// if (isStudent) {
//   console.log("You are a student");
// } else {
//   console.log("You are NOT a student");
// }

//----------------------------------------------------

// let age = 18;
// let hasLicense = true;

// if (age >= 16) {
//   console.log("You are old enough to drive");
//   if (hasLicense) {
//     console.log("You have your license!");
//   } else {
//     console.log("You do not have your license yet");
//   }
// } else {
//   console.log("You must be 16+ to have a license!");
// }

//----------------------------------------------------
const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");
let age;

mySubmit.onclick = function () {
  age = myText.value;
  age = Number(age);

  if (age >= 100) {
    console.log("You're too OLD to enter this site😂");
    resultElement.textContent = `You're too OLD to enter this site😂`;
  } else if (age >= 18) {
    console.log("You are old enough to enter this site");
    resultElement.textContent = `You are old enough to enter this site`;
  } else if (age == 0) {
    console.log("You can't enter, - you were just born🤣 ");
    resultElement.textContent = `You can't enter, - you were just born🤣 `;
  } else if (age < 0) {
    console.log("Your age can not be below 0");
    resultElement.textContent = `Your age can not be below 0`;
  } else {
    console.log("You must be 18+ to enter this site!");
    resultElement.textContent`You must be 18+ to enter this site!`;
  }
};
