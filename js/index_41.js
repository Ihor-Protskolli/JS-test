// Static = keyword that defines properties or methods that belong to a class itself rather then the objects created from that class (class owns anything static, not the objects)
//-------------------------------------------
// class mathUtil{ 
//     static Pi = 3.14159;
    
//     static getDiameter(radius) {
//         return radius * 2;
//     }
    
//     static getCircumference(radius){
//         return (2 * radius *  this.Pi).toFixed(2);
//     }
    
//     static getArea(radius) { 
//         return this.Pi * radius * radius;
//     }
// }

// console.log(mathUtil.Pi);
// console.log(mathUtil.getDiameter(10));
// console.log(mathUtil.getCircumference(10));
// console.log(mathUtil.getArea(10));
//----------------------------------------------------

class User{
    static userCount = 0;
    
    constructor(username) {
        this.username = username;
        User.userCount++;
    }    
    
    static getUserCount() { 
        console.log(`There are ${this.userCount} users online`);
    }
    
    sayHello() { 
        console.log(`My name is ${this.username}`);
    }
    
}

const user1 = new User("Spongebob");
const user2 = new User("Patrick");
const user3 = new User("Squidward");


console.log(user1.username);
user1.sayHello();
User.getUserCount();

