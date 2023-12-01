function Vehicle(brand, model, year, engineCapacity) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.engineCapacity = engineCapacity;
  
    this.getDetails = function () {
      return `Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}, Engine Capacity: ${this.engineCapacity}`;
    };
  }
  
  function Car() {
    Vehicle.call(this);
    this.type = "Car";
  }
  
  Car.prototype = Object.create(Vehicle.prototype);
  
  function Sedan1(brand, model, year, engineCapacity) {
    Car.call(this);
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.engineCapacity = engineCapacity;
  }
  
  Sedan1.prototype = Object.create(Car.prototype);
  
  function SUV(brand, model, year, engineCapacity) {
    Car.call(this);
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.engineCapacity = engineCapacity;
  }
  
  SUV.prototype = Object.create(Car.prototype);
  
  const toyotaCamry = new Sedan1("Toyota", "Camry", 2003, 2.7);
  const jeepGrandCherokee = new SUV("Jeep", "Grand Cherokee", 2002, 8.6);
  
  console.log("Toyota Details:");
  console.log(toyotaCamry.getDetails());
  
  console.log("Jeep  Details:");
  console.log(jeepGrandCherokee.getDetails());
  