// getter = makes a property readable
// setter = makes a property writeable

// validate and modify a value when reading/writing a property

//----------------------------------------------------------------
// class Rectangle {
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }

//   set width(newWidth) {
//     if (newWidth > 0) {
//       this._width = newWidth;
//     } else {
//       console.error("Width must be a positive number");
//     }
//   }

//   set height(newHeight) {
//     if (newHeight > 0) {
//       this._height = newHeight;
//     } else {
//       console.error("Height must be a positive number");
//     }
//   }

//   get width() {
//     return `${this._width.toFixed(1)}cm`;
//   }

//   get height() {
//     return `${this._height.toFixed(1)}cm`;
//   }
  
//     get area() { 
//         return `${(this._width * this._height).toFixed(1)}cm^2`;
//     }
  
// }

// // const rectangle = new Rectangle(-100000, "pizza");
// const rectangle = new Rectangle(5, 5);
// console.log(rectangle.width);
// console.log(rectangle.height);
// console.log(rectangle.area);
//----------------------------------------------------------------


class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  set firstName(newFirstName) {
    if (typeof newFirstName === "string" && newFirstName.length > 0) {
      this._firstName = newFirstName;
    } else {
      console.error("The string can't be empty");
    }
  }
  set lastName(newLastName) {
    if (typeof newLastName === "string" && newLastName.length > 0) {
      this._lastName = newLastName;
    } else {
      console.error("The string can't be empty");
    }
  }

    set age(newAge) {
        if (typeof newAge === "number" && newAge > 0) {
            this._age = newAge;
        }
        else {
            console.error("Age must be a non-negative number");
        }
    }
    
    get firstName() {
        return this._firstName;
    }
    
    get lastName() {
        return this._lastName;
    }
    
    get fullName() { 
        return this._firstName + " " + this._lastName;
    }
    
    get age() {
        return this._age;
    }
}

const person1 = new Person("Spongebob", "Squarepants", 30)
console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.fullName);
console.log(person1.age);