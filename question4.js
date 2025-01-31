// Problem 4
// Define a base class Shape with a method draw. Create two subclasses Circle and Rectangle that override
// the draw method. Demonstrate polymorphism using instances of these classes.

// Base class Shape
class Shape {
  draw() {
    console.log("Drawing a shape");
  }
}

// Subclass Circle
class Circle extends Shape {
  draw() {
    console.log("Drawing a Circle");
  }
}

// Subclass Rectangle
class Rectangle extends Shape {
  draw() {
    console.log("Drawing a Rectangle");
  }
}

// Polymorphism demonstration
const shapes = [new Circle(), new Rectangle()];

shapes.forEach(shape => shape.draw()); 
// Output:
// Drawing a Circle
// Drawing a Rectangle
