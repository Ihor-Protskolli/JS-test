// .reduce() = reduce the elements of an array to a single value

// const prices = [5, 30, 15, 20, 10, 25];

// const total = prices.reduce(sum);
// console.log(`$${total.toFixed(2)}`);

// function sum(accumulator, element) {
//   return accumulator + element;
// }

const grades = [75, 50, 60, 90, 80, 65];
const maximum = grades.reduce(getMax);
const minimum = grades.reduce(getMin);

console.log(maximum);
console.log(minimum);

function getMax(accumulator, element) {
  return Math.max(accumulator, element);
}

function getMin(accumulator, element) {
  return Math.min(accumulator, element);
}
