// ES6 Module = An external file that contains reusable code that can be imported into other JS files
// Write reusable code for many different apps.
//Can contain variables, functions, classes and more

import { PI, getCircumference, getArea, getVolume } from '../ES6-Module/mathUtil.js'; 


const circumference = getCircumference(10);
const area = getArea(10);
const volume = getVolume(10);

console.log(PI);
console.log(`The circumference is ${circumference.toFixed(2)}cm`);
console.log(`The area is ${area.toFixed(2)} cm^2`);
console.log(`The volume is ${volume.toFixed(2)} cm^3`);




