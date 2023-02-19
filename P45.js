/**45.	Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly. */
var Car = /** @class */ (function () {
    function Car(manufacturer, model, color, optionalFeature) {
        this.carManufacturer = manufacturer;
        this.carModel = model;
        this.carColor = color;
        this.carOptionalFeature = optionalFeature;
    }
    return Car;
}());
var car1 = new Car("Audi", "Model 2023", "Arrow Gray", "Automatic");
var car2 = new Car("Mehran", "Model 2010", "Red", "NEW light");
console.log(car1);
console.log(car2);
