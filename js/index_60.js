// element selectors = Methods used to target and manipulate HTML elements
// They allow you to select one or multiple HTML-elements 
// From the DOM

// 1. document.getElementById()   //ELEMENT OR NULL
// 2. document.getElementsByClassName() //HTML COLLECTION
// 3. document.getElementsByTagName()  //HTML COLLECTION
// 4. document.querySelector()   //ELEMENT OR NULL
// 5. document.querySelectorAll()   //NODELIST

                //           !!!!!         HTML      !!!!!!!!!!!!!!!!!!
    
<h1 id="my-heading">Website Sample</h1>

<div class="fruits">Apple</div>
<div class="fruits">Orange</div>
<div class="fruits">Banana</div>

<h4>Root vegetables</h4>
<ul>
    <li>Beets</li>
    <li>Carrots</li>
    <li>Potatoes</li>
</ul>

<h4>Non-Root vegetables</h4>
<ul>
    <li>Broccoli</li>
    <li>Celery</li>
    <li>Onions</li>
</ul>
    


//------------------------------------------------------------------
// const myHeading = document.getElementById("my-heading");
// myHeading.style.backgroundColor = "yellow";
// myHeading.style.textAlign = "center";
//------------------------------------------------------------------

// const fruits = document.getElementsByClassName("fruits");

// fruits[0].style.backgroundColor = "yellow";
// fruits[1].style.backgroundColor = "aqua";

// for (let fruit of fruits) {
//     fruit.style.backgroundColor = 'orange'
// }
// ====================================
// Array.from(fruits).forEach(fruit => {
//     fruit.style.backgroundColor = 'blue';
// });
//------------------------------------------------------------------

// const h4Elements = document.getElementsByTagName("h4");
// const liElements = document.getElementsByTagName("li");

// h4Elements[0].style.backgroundColor = "green";

// for (let h4Element of h4Elements) {
//     h4Element.style.backgroundColor = "orange";
// }

// liElements[0].style.backgroundColor = "blue";

// for (let liElement of liElements) {
//     liElement.style.backgroundColor = 'aquamarine'
// }
//------------------------------------------------------------------

// const element = document.querySelector("ul");
// element.style.backgroundColor = "yellow";
//------------------------------------------------------------------

// const fruits = document.querySelectorAll(".fruits");
// fruits[1].style.backgroundColor = "#bb90ee";

const foods = document.querySelectorAll("li");

foods[4].style.backgroundColor = 'yellow';

foods.forEach(food => { 
    food.style.backgroundColor = 'green';
})




