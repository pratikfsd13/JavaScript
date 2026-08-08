class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    // Getter method for area
    get area() {
        return Math.PI * this.radius * this.radius;
    }
}
const obj = new Circle(5);
    console.log(obj.area) // Output: 78.53981633974483

// _ is used to indicate that the property is intended to be private, 
// and the getter method allows controlled access to the area of the circle.