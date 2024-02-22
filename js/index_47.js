// arrays of objects

const fruits = [
  { name: "apple", color: "red", calories: 95 },
  { name: "orange", color: "orange", calories: 35 },
  { name: "banana", color: "yellow", calories: 105 },
  { name: "coconut", color: "white", calories: 139 },
  { name: "pineapple", color: "yellow", calories: 37 },
];

// fruits.push({ name: "grapes", color: "purple", calories: 50 }); //add an object
// fruits.pop(); // remove the last object
// fruits.splice(1,3) // remove objects from index to index

// console.log(fruits[0].name);

// console.log(fruits);

// ------------------- forEach() -------------------

// fruits.forEach((fruit) => console.log(fruit.name));
// fruits.forEach((fruit) => console.log(fruit.color));
// fruits.forEach((fruit) => console.log(fruit.calories));

// ------------------- map() -------------------

// const fruitNames = fruits.map((fruit) => fruit.name);
// const fruitColors = fruits.map((fruit) => fruit.color);
// const fruitCalories = fruits.map((fruit) => fruit.calories);
// console.log(fruitNames);
// console.log(fruitColors);
// console.log(fruitCalories);

// ------------------- filter() -------------------

// const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");
// const lowCalFruits = fruits.filter((fruit) => fruit.calories < 100);
// const highCalFruits = fruits.filter((fruit) => fruit.calories > 100);
// console.log(yellowFruits);
// console.log(lowCalFruits);
// console.log(highCalFruits);

// ------------------- reduce() -------------------

const maxFruit = fruits.reduce((max, fruit) => fruit.calories > max.calories ? fruit : max); //(accumulator, element)

const minFruit = fruits.reduce((min, fruit) => fruit.calories < min.calories ? fruit : min); //(accumulator, element)

console.log(minFruit);
console.log(maxFruit);




