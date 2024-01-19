// String-slicing

// const fullName = "Ihor Code";
// let firstName = fullName.slice(0, 4);
// let lastName = fullName.slice(5);
// let firstChar = fullName.slice(0, 1);
// let lastChar = fullName.slice(-1);
// console.log(lastChar);
// console.log(firstChar);

// let firstName = fullName.slice(0, fullName.indexOf(" "));
// let lastName = fullName.slice(fullName.indexOf(" ") + 1);

// console.log(firstName);
// console.log(lastName);

// -----------------------------------------------------------------------------

const email = "ihorcode@gmail.com";
let username = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@") + 1);

console.log(username);
console.log(extension);
