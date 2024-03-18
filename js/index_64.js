// eventListener = listen for specific events to create interactive web-pages events: keydown, keyup
//          document.addEventListener(event, callback);

// !!!!!!! HTML !!!!!!!
    <div id="my-box">😄</div>;
// !!!!!!! CSS !!!!!!!
body{
    margin: 0;
}
#my-box{
    width: 200px;
    height: 200px;
    font-size: 7.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color:lightblue;
    position: relative;
}


// document.addEventListener("keydown", (event) => {
//   console.log(`Key down = ${event.key}`);
// });

// document.addEventListener("keyup", (event) => {
//   console.log(`Key up = ${event.key}`);
// });
//------------------------------------------------------------------
const myBox = document.getElementById("my-box");
const moveAmount = 5;
let x = 0;
let y = 0;

document.addEventListener("keydown", event => {
    myBox.textContent = "👻";
    myBox.style.backgroundColor = "red";
})

document.addEventListener("keyup", (event) => {
  myBox.textContent = "😄";
  myBox.style.backgroundColor = "lightblue";
});

document.addEventListener("keydown", event => {

    if (event.key.startsWith("Arrow")) {
        
        event.preventDefault();
        
        switch (event.key) {
            case "ArrowUp":
                y -= moveAmount;
                break;
        }
        
        switch (event.key) {
            case "ArrowDown":
                y += moveAmount;
                break;
        }
        
        switch (event.key) {
            case "ArrowLeft":
                x -= moveAmount;
                break;
        }
        
        switch (event.key) {
            case "ArrowRight":
            x += moveAmount;
            break;
        }
        
        myBox.style.top = `${y}px`;
        myBox.style.left = `${x}px`;
        
    }
})