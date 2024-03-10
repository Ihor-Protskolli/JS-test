// Mouse events
// eventListener = Listen for specific events to create interactive web pages
//          events: click, mouseover, mouseout
//          addEventListener(event,callback)

//   !!! HTML !!!
    <div id="myBox">
      Click me 😀
    </div>
    <button id="myButton">Click me</button>
//   !!! HTML !!!

//   !!! CSS !!!
#myBox{
    background-color: lightgreen;
    width: 300px;
    height: 300px;
    font-size: 4.1rem;
    font-weight: bold;
    display: flex;
    align-items: center;
    text-align: center;
}
#myButton{
    font-size: 4rem;
}
//   !!! CSS !!!

const myBox = document.getElementById("myBox");

//======================================================
// function changeColor(event) {
//     event.target.style.backgroundColor = 'tomato';
//     event.target.textContent = "Ouch🤕";
// }
//======================================================

// myBox.addEventListener("click", function (event) {
//         event.target.style.backgroundColor = "tomato";
//         event.target.textContent = "Ouch🤕";
// });
//======================================================

// myBox.addEventListener("click", event => {
//   event.target.style.backgroundColor = "tomato";
//   event.target.textContent = "Ouch🤕";
// });

// myBox.addEventListener("mouseover", event => {
//   event.target.style.backgroundColor = "yellow";
//   event.target.textContent = "Don't do it!🫨";
// });

// myBox.addEventListener("mouseout", event => {
//     event.target.style.backgroundColor = "lightgreen";
//     event.target.textContent = "Click me 😀";
// })

// INTERACT WITH SEPARATE ELEMENT

const myButton = document.getElementById("myButton");

myButton.addEventListener("click", (event) => {
  myBox.style.backgroundColor = "tomato";
  myBox.textContent = "Ouch🤕";
});

myButton.addEventListener("mouseover", (event) => {
  myBox.style.backgroundColor = "yellow";
  myBox.textContent = "Don't do it!🫨";
});

myButton.addEventListener("mouseout", (event) => {
  myBox.style.backgroundColor = "lightgreen";
  myBox.textContent = "Click me 😀";
});





