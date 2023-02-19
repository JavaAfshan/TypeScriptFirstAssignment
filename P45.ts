/**45.	Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly. */
class Car {
    carManufacturer: string;
    carModel: string;
    carColor?: string;
    carOptionalFeature?: string;
  
    constructor(manufacturer: string, model: string, color?: string, optionalFeature?: string) {
      this.carManufacturer = manufacturer;
      this.carModel = model;
      this.carColor = color;
      this.carOptionalFeature = optionalFeature;
    }
  }
  
  const car1= new Car("Audi", "Model 2023", "Arrow Gray", "Automatic");
  const car2 =new Car("Mehran","Model 2010","Red","NEW light");
  console.log(car1);
  console.log(car2);
