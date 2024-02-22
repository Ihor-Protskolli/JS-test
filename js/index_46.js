// nested objects =  Object inside other objects
// child object is enclosed by a Parent object

// const person = {
//     fullName: "Spongebob Squarepants",
//     age: 30,
//     isStudent: true,
//     hobbies: ["karate", "jellyfishing", "cooking"],
//     address: {
//         street: "53 Underwater st.",
//         city: "Bikini Bottom",
//         country: "Int. Water",
//     }
// }

// for (const property in person.address) {
//     console.log(person.address[property]);
//  }

// // console.log(person.fullName);
// // console.log(person.age);
// // console.log(person.isStudent);
// // console.log(person.hobbies[2]);
// // console.log(person.address.city);



class Person{
    
    constructor(name, age, ...address) {
        this.name = name;
        this.age = age;
        this.address = new Address(...address); 
     }
}

class Address {
    
    constructor(street, city, country) { 
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person1 = new Person("Spongebob", 30, "53 Underwater st.", "Bikini Bottom", "Int. Water ");
const person2 = new Person("Patrick", 36, "57 Underwater st.", "Bikini Bottom", "Int. Water ");
const person3 = new Person("Squidward", 45, "55 Underwater st.", "Bikini Bottom", "Int. Water ");

console.log(person1.name);
console.log(person2.address.city);
console.log(person3.address.street);












