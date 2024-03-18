// classList

//add()
//remove()
//toggle()
//replace(oldClass, newClass)
//contains()

// !!!!!!!! HTML !!!!!!!!
    <h1 id="myH1">Hello</h1>
    <button id="myButton">Click me</button>
// !!!!!!!! CSS !!!!!!!!
#myButton{
    font-size: 4rem;
    margin: 10px;
    border: 0;
    border-radius: 5px;
    padding: 10px 15px;
}

#myH1{
    font-size: 5rem;
}

.enabled{
    background-color: hsl(240, 87%, 70%);
    color: white;
}

.hover{
    box-shadow: 0 0 10px hsla(0, 0%, 0%, 0.2);
    font-weight: bold;
}

.disabled{
    background-color: hsl(0, 0%, 60%);
    color: hsl(0, 0%, 80%);
}
//-----------------------------------------------------

const myH1 = document.getElementById("myH1");
const myButton = document.getElementById("myButton");

myH1.classList.add("enabled");
myButton.classList.add("enabled");

myH1.addEventListener("click", event => {
    
    if (event.target.classList.contains("disabled")) { 
        event.target.textContent += "📴";
    }
    
    else {
            event.target.classList.replace("enabled", "disabled");
     }
});


myButton.addEventListener("click", (event) => {
  if (event.target.classList.contains("disabled")) {
    event.target.textContent += "📴";
  } else {
    event.target.classList.replace("enabled", "disabled");
  }
});


//-----------------------------------------------------
// myButton.addEventListener("mouseover", event => {
//     event.target.classList.toggle("hover");
// })

// myButton.addEventListener("mouseout", (event) => {
//   event.target.classList.toggle("hover");
// });
//-----------------------------------------------------


