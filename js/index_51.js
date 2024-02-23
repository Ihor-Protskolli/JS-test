// closure =  A function defined inside another function,
//                  the inner function has access to the variables
//                  and scope of the outer function 
//Allow for private variables and state maintenance

// function outer() { 
    
//     let message = "Hello";
    
//     function inner() { 
//         console.log(message);
//     }
//     inner();
// }

// message = "Goodbye"; // doesn't overwrite the function's variable() 

// outer();




// function createCounter() { 
//     let count = 0;

//     function increment() {
//       count++;
//       console.log(`Count was incremented to ${count}`);
//     }
    
//     function getCount() { 
//         return count;
//     }

//     return {increment, getCount};
// }

// const counter = createCounter();

// counter.increment();
// counter.increment();
// counter.increment();

// console.log(`The current number is ${counter.getCount()}`);



function createGame() { 
    let score = 0;

    function increaseScore(points) {
      score += points;
      console.log(`+${points}pts`);
    }

    function decreaseScore(points) {
      score -= points;
      console.log(`-${points}pts`);
    }

    function getScore() {
      return score;
    }
    
    return {increaseScore, decreaseScore, getScore}; //returning references
}

const game = createGame(); //create const for the object

//score = 100000000; // breaks the program because it's not private

game.increaseScore(5); // .game = access the inner function
game.decreaseScore(3);
console.log(`The final score is ${game.getScore()}pts`);


