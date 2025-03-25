// Person constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Adding greet method to Person prototype
Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
};

// Employee constructor function (inherits from Person)
function Employee(name, age, jobTitle) {
  Person.call(this, name, age); // Call Person constructor
  this.jobTitle = jobTitle;
}

// Inheriting from Person prototype
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

// Adding jobGreet method to Employee prototype
Employee.prototype.jobGreet = function() {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
};

// Example Usage
const person = new Person("Alice", 25);
person.greet();
// Expected Output: Hello, my name is Alice, I am 25 years old.

const employee = new Employee("Bob", 30, "Manager");
employee.jobGreet();
// Expected Output: Hello, my name is Bob, I am 30 years old, and my job title is Manager.
