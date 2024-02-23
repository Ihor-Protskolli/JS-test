//setTimeout(callback, delay) 
//clearTimeout(timeoutId) = cancel a timeout before it triggers

// setTimeout(function () { 
//     window.alert("Hello");
// }, 3000);


// const timeoutId = setTimeout(() => window.alert("Hello"), 3000);
// clearTimeout(timeoutId);


// function setTimer() {
//     setTimeout(() => window.alert("Hello"), 3000);
// }

// const button = document.createElement('button');

// button.textContent = "START";

// document.body.appendChild(button);


//     <button onclick="setTimer()">START</button>


const button = document.createElement('button');

button.textContent = "START";

button.addEventListener('click', setTimer);

function setTimer() {
    setTimeout(() => window.alert("Hello"), 3000);
    console.log("Timer started!");
}
document.body.appendChild(button);
