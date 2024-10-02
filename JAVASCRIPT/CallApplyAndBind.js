//Example-1
function greet(name) {
  console.log(`Hello, ${name}! My name is ${this.name}.`);
}

let person1 = {
  name: "kusuma"
};
greet.call(person1, "Priya"); 


//Example-2
function add(a, b) {
  return a + b;
}

let numbers = [1, 2];

console.log(add.apply(null, numbers)); 



//Example-3
let person = {
  name: "Priya",
  greet: function() {
    console.log(`Hello, my name is ${this.name}.`);
  }
};

let greetPerson = person.greet.bind(person);

greetPerson(); 
