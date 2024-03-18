// NodeList = Static collection of HTML elements by (id, element, class)
//      Can be created by using querySelectorAll()
//      Similar to an array, but no (map,filter, reduce)
//      NodeList won't update to automatically reflect changes

// !!!!!!! HTML !!!!!!!
    <button class="myButtons">Button 1</button>
    <button class="myButtons">Button 2</button>
    <button class="myButtons">Button 3</button>
    <button class="myButtons">Button 4</button>

// !!!!!! CSS !!!!!!
.myButtons{
    font-size: 4rem;
    margin: 10px;
    border: 0;
    border-radius: 5px;
    padding: 10px 15px;
    background-color: hsl(216, 100%, 77%);
    display: flex;
    flex-direction: column;
    cursor: pointer;
}
.myButtons:hover{
    font-size: 4.3rem;
}    
//------------------------------------

let buttons = document.querySelectorAll(".myButtons");

// Add HTML/CSS properties
// buttons.forEach(button => {
//     button.style.backgroundColor = "silver";
//     button.textContent += " 🙂";
// })


// CLICK event listener
// buttons.forEach(button => {
//     button.addEventListener("click", event => {
//         event.target.style.backgroundColor = "tomato";
//     })
// })


// MOUSEOUT & MOUSEOVER event listener
// buttons.forEach(button => {
//     button.addEventListener("mouseover", event => {
//         event.target.style.backgroundColor = "hsl(216, 100%, 60%)";
//     })
// })

// buttons.forEach((button) => {
//   button.addEventListener("mouseout", (event) => {
//     event.target.style.backgroundColor = "hsl(216, 100%, 77%)";
//   });
// });

//ADD an element
// const newButton = document.createElement("button"); //STEP 1
// newButton.textContent = "Button 5"  // STEP 2
// newButton.classList = "myButtons";
// document.body.appendChild(newButton); // STEP 3

// buttons = document.querySelectorAll(".myButtons"); // Update NodeList elements
// console.log(buttons);


// REMOVE an element

buttons.forEach(button => {
    button.addEventListener("click", event => {
        event.target.remove();
        buttons = document.querySelectorAll(".myButtons");
        console.log(buttons);
    })
})
