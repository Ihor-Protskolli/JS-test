// sort() = method used to sort elements of an array in place 
// Sorts elements as strings in lexicographic order, not alphabetical 
// lexicographic = (alphabet + numbers + symbols) as strings

// let fruits = ["banana", "apple", "coconut", "orange", "pineapple"];
// let numbers = [2,6,1,3,4,8,9,10, 7,0, 5];

// console.log(fruits.sort());
// console.log(numbers.sort((a,b) => a - b )); //sort from 0 (minNum) to maxNum
// console.log(numbers.sort((a, b) => b - a)); //sort from maxNum to zero (minNum)

const people = [
  {
    name: "Spongebob",
    age: 30,
    gpa: 3.0,
  },
  {
    name: "Patrick",
    age: 37,
    gpa: 2.5,
  },
  {
    name: "Squidward",
    age: 51,
    gpa: 3.7,
  },
  {
    name: "Sandy",
    age: 27,
    gpa: 4.0,
  },
];

// console.log(people.sort((a, b) => a.age - b.age));
// console.log(people.sort((a, b) => b.gpa - a.gpa));
console.log(people.sort((a, b) => a.name.localeCompare(b.name)));