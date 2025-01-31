// Problem 2
// Create a constructor Employee that inherits from the Person constructor of problem 1. Add an additional
// property designation and a method getDetails to display the employee details

function Employee(name, age, designation) {
  Person.call(this, name, age); // Inheriting properties from Person
  this.designation = designation;

  this.getDetails = function() {
    console.log(`Name: ${this.name}, Age: ${this.age}, Designation: ${this.designation}`);
  };
}

// // Setting up prototype inheritance
// Employee.prototype = Object.create(Person.prototype);
// Employee.prototype.constructor = Employee;

// Example 
const employee1 = new Employee("Ravneet", 22, "Web Developer");
employee1.sayHello();
employee1.getDetails(); 