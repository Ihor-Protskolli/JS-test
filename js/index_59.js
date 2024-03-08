//DOM (Document Object Model)

const username = "Protskolli";

const welcomeMsg = document.getElementById("welcome-msg");

welcomeMsg.textContent += username === "" ? `Guest` : username;

//    <h1 id="welcome-msg">Welcome </h1>      *inside html body*