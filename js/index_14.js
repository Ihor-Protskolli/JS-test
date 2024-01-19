// String methods

let userName = "IhorCode";
// let output = userName.charAt(2);
// let output = userName.indexOf("o");
// let output = userName.lastIndexOf("o");
// let output = userName.length;
//let output = userName.trim(); //deletes whitespaces (if there are some) after the string
// let output = userName.toUpperCase();
// let output = userName.toLowerCase();
// let output = userName.repeat(4);

// console.log(output);

// ---------------------------------------------------------------
// let output = userName.startsWith("Ihor"); //returns Boolean-value

// if (output == false) {
//   console.log("Your name can't start with ' ' ");
// } else {
//   console.log(userName);
// }
// ---------------------------------------------------------------

// ---------------------------------------------------------------

// let output = userName.endsWith("Code"); //returns Boolean-value

// if (output == false) {
//   console.log("Your name can't end with ' ' ");
// } else {
//   console.log(userName);
// }
// ---------------------------------------------------------------

// let phoneNumber = "123-456-789";
// output = phoneNumber.includes(' ');
// console.log(output);

// let phoneNumber = "123-456-789";
// phoneNumber = phoneNumber.replaceAll('-', '');
// console.log(phoneNumber);

// let phoneNumber = "123-456-789";
// phoneNumber = phoneNumber.padStart('20', 'p'); // fill in original string with SPECIFIED AMOUNT of characters and WHAT CHARACTERS
// console.log(phoneNumber);

let phoneNumber = "123-456-789";
phoneNumber = phoneNumber.padEnd("20", "p"); // fill in original string with SPECIFIED AMOUNT of characters and WHAT CHARACTERS
console.log(phoneNumber);