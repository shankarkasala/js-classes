//A class should be defined before using it. Unlike functions and other JavaScript declarations, the class is not hoisted.

//Classes always follow 'use-strict'. All the code inside the class is automatically in strict mode.

//JavaScript class is a special type of function. And the typeof operator returns function for a class.

class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log('my name is', this.name);
  }
}
let res = new Person('shankar');
res.greet();

class Emp {
  constructor(name, age) {
    (this.name = name), (this.age = age);
  }
}
class Empdetails extends Emp {
  constructor(name, age, occupation) {
    super(name, age);
    this.occupation = occupation;
  }
  get details() {
    console.log(
      `emp name is ${this.name} age is ${this.age} and his occupation is ${this.occupation}`
    );
  }
  set details(x) {
    this.name = x;
  }
}
let sol = new Empdetails('shankar', 27, 'Engineer');
sol.details;

sol.details = 'uma';
sol.details;

class Chameleon{
  static colorChange(newcolor){
this.newcolor = newcolor
console.log(this.newcolor)  }
}
let obj1=new Chameleon('orenge')
console.log(obj1.colorChange)