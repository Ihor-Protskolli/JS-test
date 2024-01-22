// variable scope = where a variable is recognized and accessible (global or local)

let x = 3; // global

function2();

function function1() {
  let x = 1; //local
  console.log(x);
}

function function2() {
  let x = 2; //local
  console.log(x);
}
