// arrays

let fruits = ["apple", "banana", "orange"];
// fruits[3] = "watermelon";

// fruits.push("coconut"); //[4]
// fruits.pop(); // remove last element
// fruits.unshift("mango"); // [-1]
// fruits.shift();

// console.log(fruits);
// console.log(fruits[0]);
// console.log(fruits[3]);
// console.log(fruits[4]);

// let numOfFruits = fruits.length;
// let index = fruits.indexOf("banana");

// console.log(numOfFruits);
// console.log(index);

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

fruits.sort().reverse();

for (fruit of fruits) {
  console.log(fruit);
}
