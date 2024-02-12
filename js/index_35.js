// function expression = a way to define functions as values or variables

                        //regular function

// function hello() {
//     console.log("Hello");
// }
// hello();

                        //Function expression
                        
// const privet = function () { 
//     console.log("Privet");
// }
// privet();


// setTimeout(function () { 
//     console.log("Hello");
// }, 3000)

const numbers = [1, 2, 3, 4, 5, 6];
const squares = numbers.map(function square(element) {
    return Math.pow(element, 2);
}) 
console.log(squares);
 
const cubes = numbers.map(function cube(element) {
  return Math.pow(element, 3);
})
console.log(cubes);

const total = numbers.reduce(function (accumulator, element) {
    return accumulator + element;
})
console.log(total);

