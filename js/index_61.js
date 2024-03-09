// DOM navigation = Process of navigating through HTML using JS

// !!!!!! HTML !!!!!!

    
      <ul id="fruits">
        <li id="apple">Apple</li>
        <li id="banana">Banana</li>
        <li id="orange">Orange</li>
      </ul>

      <ul id="vegetables">
        <li id="carrots">Carrots</li>
        <li id="potatoes">Potatoes</li>
        <li id="onions">Onions</li>
      </ul>
      
      <ul id="desserts">
        <li id="cake">cake</li>
        <li id="pie">pie</li>
        <li id="ice-cream">ice cream</li>
      </ul>

      

//  ------------------ .firstElementChild ------------------
 
// const element = document.getElementById("fruits");
// const firstChild = element.firstElementChild;
// firstChild.style.backgroundColor = "yellow";


// const ulElements = document.querySelectorAll("ul");
// ulElements.forEach(ulElement => {
//     const firstChild = ulElement.firstElementChild;
//     firstChild.style.backgroundColor = "green";
// })

//  ------------------ .lastElementChild ------------------

// const element = document.getElementById("desserts");
// const lastChild = element.lastElementChild;
// lastChild.style.backgroundColor = 'yellow';


// const ulElements = document.querySelectorAll('ul');
// ulElements.forEach(ulElement => {
//     const lastChild = ulElement.lastElementChild;
//     lastChild.style.backgroundColor = 'lightgreen';
// })

//  ------------------ .nextElementSibling ------------------

// const element = document.getElementById("apple");
// const nextSibling = element.nextElementSibling;
// nextSibling.style.backgroundColor = 'aqua';

//  ------------------ .previousElementSibling ------------------

// const element = document.getElementById("pie");
// const nextSibling = element.previousElementSibling;
// nextSibling.style.backgroundColor = 'orange';

//  ------------------ .parentElement ------------------

// const element = document.getElementById("onions");
// const parent = element.parentElement;
// parent.style.backgroundColor = 'brown';

//  ------------------ .childElement ------------------

const element = document.getElementById("desserts");
const children = element.children;

Array.from(children).forEach(child => {
    child.style.backgroundColor = 'yellow';
});






