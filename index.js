function Vehicle(brand, model, speed, fuelType){
    this.brand = brand;
    this.model = model;
    this.speed = speed;
    this.fuelType = fuelType;
}

function accelerate(){
    this.speed += 15;
    console.log("Now speed: " + this.speed);
}

function brake(){
    this.speed -= 17;
    console.log("Now speed: " + this.speed);
}

function refuel(){
    console.log("The vehicle is refueling...")
}

Vehicle.prototype.accelerate = accelerate;
Vehicle.prototype.brake = brake;
Vehicle.prototype.refuel = refuel;



function Car(brand, model, speed, fuelType, noOfWhiles){
    Vehicle.call(this, brand, model, speed, fuelType);
    this.noOfWhiles = noOfWhiles;
    this.honk = function (){
        console.log("Honking...");
    }
}


function Airplane(brand, model, speed, fuelType, numberOfEngines, hasLandingGear){
    Vehicle.call(this, brand, model, speed, fuelType);
    this.numberOfEngines = numberOfEngines;
    this.hasLandingGear = hasLandingGear;
    this.takeOff = function(){
        console.log("Airplane is taking off...");
    }
}


Object.setPrototypeOf(Car.prototype, Vehicle.prototype);
Object.setPrototypeOf(Airplane.prototype, Vehicle.prototype);

let car = new Car("Tata", "T-2303", 80, "Diesel", 9);

let air = new Airplane("Indigo", "BOING-", 290, "Gesoline", 8, true);

console.log(car);
console.log(air);

car.honk();
car.refuel();
car.accelerate();
car.brake();

air.takeOff();
air.accelerate();

console.log("Fule type of Airplane: " + air.fuelType);