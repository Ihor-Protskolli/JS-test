// this = reference to the object where THIS is used 
// person.name = this.name 

const person1 = {
    name: "Spongebob",
    favFood: "hamburgers",
    sayHello: function () { 
        console.log(`Hi! I am ${this.name}`);
    },
    eat: function () { 
        console.log(`I like ${this.favFood}`);
    },
}

const person2 = {
  name: "Patrick",
  favFood: "pizza",
  sayHello: function () {
    console.log(`Hi! I am ${this.name}`);
  },
  eat: function () {
    console.log(`I like ${this.favFood}`);
  },
};

person2.sayHello();
person2.eat();