//Error handling

//Error = An Object that is created to represent a problem that occurs
// Occur often with user input or establishing a connection

//try { } = Encloses code that might potentially cause an error

//catch { } = Catch and handle any thrown errors from try{ }

//finally { } = (optional)  Always executes. Used mostly for clean up
//   ex. close files, close connections, release resources

//-----------------------------------------------------
// try {
//     console.log(x);
//     //NETWORK ERRORS
//     //PROMISES REJECTION
//     //SECURITY ERRORS
// }

// catch (error) {
//     console.error(error);
// }

// finally {
//     console.log("This always executes");
// }

// console.log("You've reached the end!");
//-----------------------------------------------------

try {
  const dividend = Number(window.prompt("Enter a dividend: "));
  const divisor = Number(window.prompt("Enter a divisor: "));
  
    if (divisor == 0) {
       throw new Error ("You can't divide be zero!");
    }
    
    if (isNaN(dividend)|| isNaN(divisor)) { 
        throw new Error("Please type in a number");
    }
  
  const result = dividend / divisor;
  console.log(result);
}

catch (error) {
  console.error(error);
}

console.log("You have reached the end!");
