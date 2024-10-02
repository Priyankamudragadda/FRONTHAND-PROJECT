//Example-1
function Animal(name) {
    this.name = name;
  }
  
  Animal.prototype.speak = function() {
    return `${this.name} makes a sound.`;
  };
  
  function Dog(name) {
    Animal.call(this, name); // Inherit properties from Animal
  }
  
  Dog.prototype = Object.create(Animal.prototype); // Inherit methods from Animal
  Dog.prototype.constructor = Dog;
  
  Dog.prototype.bark = function() {
    return `${this.name} barks.`;
  };
  
  const dog = new Dog("Max");
  console.log(dog.speak()); 
  console.log(dog.bark()); 
  
//Example-2
const person = {
    introduce() {
      return `Hello, my name is ${this.name}.`;
    }
  };
  
  const student = Object.create(person); // student inherits from person
  student.name = "Priya";
  student.study = function() {
    return `${this.name} is studying.`;
  };
  
  console.log(student.introduce()); // Output: "Hello, my name is Alice."
  console.log(student.study());     // Output: "Alice is studying."
  