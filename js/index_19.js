//While loop
//------------------------------------------------
// let username;

// do {
//   username = window.prompt("Enter your name");
// } while (username === "" || username === null);
// console.log(`Hello, ${username}!`);
//------------------------------------------------

let loggedIn = false;
let username;
let password;

while (!loggedIn) {
  username = window.prompt("Enter your username");
  password = window.prompt("Enter your password");

  if (username === "Ihor" && password === "1234") {
    loggedIn = true;
    console.log("You are logged in! :)");
  } else {
    console.log("Invalid credentials, please try again");
  }
}
