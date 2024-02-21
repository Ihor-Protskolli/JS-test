// destructuring = extract value from an array or an object
// then assign them to variables in a convenient way
// [] = to perform array destructuring
// {} = to perform object destructuring

// Example 1 "Swap the value of two variables"

// let a = 1;
// let b = 2;

// [a, b] = [b, a];

// console.log(`a = ${a}`);
// console.log(`b = ${b}`);

// Example 2 "swap two elements in an array"

// const colors = ["red", "green", "blue", "black", "white"];

// [colors[0], colors[4]] = [colors[4], colors[0]];
// console.log(colors);

// Example 3 "Assign array elements to variables"

// const colors = ["red", "green", "blue", "black", "white"];

// const [firstColor, secondColor, thirdColor, ...extraColors] = colors;
// console.log(firstColor);
// console.log(secondColor);
// console.log(thirdColor);
// console.log(extraColors);

// Example 4 "Extract values from objects"

// const person1 = {
//     firstName: "Spongebob",
//     lastName: "Squarepants",
//     age: 30,
//     job: "Fry Cook"
// }

// const person2 = {
//     firstName: "Patrick",
//     lastName: "Star",
//     age: 34
// }

// const {firstName, lastName, age, job="Unemployed" } = person2;

// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(job);

// Example 5 "Destructure in function parameters"

function displayPerson({ firstName, lastName, age, job="Unemployed" }) {
    console.log(`name: ${firstName} ${lastName}`);
    console.log(`age: ${age}`);
    console.log(`job: ${job}`);
}

const person1 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    job: "Fry Cook",
}

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 34,
}

displayPerson(person2);
