//  spread operator = ...
//         unpacks elements of strings, arrays

// let numbers = [1, 2, 3, 4, 5];
// let maximum = Math.max(...numbers);
// let minimum = Math.min(...numbers);

// console.log(maximum);
// console.log(minimum);

// let username = "Ihor Code";
// let letters = [...username].join("-");

// console.log(letters);

let fruits = ["apple", "banana", "orange"];
let vegetables = ["potato", "carrot", "tomato"];

let foods = [...fruits, ...vegetables, "eggs", "milk"];
console.log(foods);
