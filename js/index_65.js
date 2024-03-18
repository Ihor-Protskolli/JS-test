// Show/Hide HTML

!!!!!!! HTML !!!!!!!
    <button id="myButton">Hide</button> <br> <br>
    <img id="myImg" src="../San_Protslo.webp"></img>
!!!!!!! CSS !!!!!!!
img{
    width: 200px;
    height: auto;
}
#myButton{
    font-size: 2rem;
}
//-----------------------------------------------------------------------
const myButton = document.getElementById("myButton");
const myImg = document.getElementById("myImg");

myButton.addEventListener("click", event => {
    
    if (myImg.style.display === "none") {
        myImg.style.display = "block";
        myButton.textContent = "Hide";
    }
    else {
        myImg.style.display = "none";
        myButton.textContent = "Show";
    }
})