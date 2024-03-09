// Add & change HTML

//  !!!!!!! HTML !!!!!!!
    
    <div class="box" id="box1">
      <p>Box1</p>
    </div>
    
    <div class="box" id="box2">
      <p>Box2</p>
    </div>
    
    <div class="box" id="box3">
      <p>Box3</p>
    </div>

    <div class="box" id="box4">
      <p>Box4</p>
    </div>    
    

// 1. Create the element

const newH1 = document.createElement('h1');

// 2. Add atributes/properties

newH1.textContent = "I like pizza";
newH1.id = "myH1";
newH1.style.color = "tomato";
newH1.style.textAlign = "center";

// 3. Append element to DOM

document.body.append(newH1);
// document.body.prepend(newH1);
// document.getElementById("box2").append(newH1);

// const box2 = document.getElementById("box2");
// document.body.insertBefore(newH1, box2);


//Remove HTML element

document.body.removeChild(newH1);