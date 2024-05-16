// Creating object car1 using the Object constructor
const car1 = new Object();

// Properties of the object car1
car1.color = "Red";
car1.maxSpeed = 300;
car1.driver = {
    name: "Driver1", 
    category: "B",
    personalLimitations: "No driving at night"
};
car1.tuning = true; 
car1.numberOfAccidents = 0; 

car1.drive = () => {
    console.log("I am not driving at night");
};


// Demonstration of the object car1 in the console
console.log("Task 1.2.3");
console.log("car1:", car1);
car1.drive();
console.log("----------------------------------");
// Create an object car2 with the following properties:
const car2 = {
  color: "Red",
  maxSpeed: 300,
  driver: {
      name: "Driver2",
      category: "B",
      personalLimitations: null
  },
  tuning: false, 
  numberOfAccidents: 2, 

  drive: function() {
      console.log("I can drive anytime");
  }
};

// Demonstration
console.log("1.2.4");
console.log("car2:", car2);

car2.drive();
console.log("----------------------------------");


const Truck = function(color, weight, avgSpeed, brand, model) {
    this.color = color;
    this.weight = weight;
    this.avgSpeed = avgSpeed;
    this.brand = brand;
    this.model = model;
}

Truck.prototype.AssignDriver = function(name, nightDriving, experience) {
    this.driver = {
        name: name,
        nightDriving: nightDriving,
        experience: experience
    };
};

Truck.prototype.trip = function() {
    if (!this.driver) {
        console.log("No driver assigned");
    } else {
        let message = "Driver " + this.driver.name + " ";
        if (this.driver.nightDriving) {
            message += "drives at night ";
        } else {
            message += "does not drive at night ";
        }
        message += "and has " + this.driver.experience + " years of experience";
        
        console.log(message);
    }
};

console.log("Task 1.2.10");
const truck1 = new Truck("Red", 10000, 110, "Skoda", "Octavia");
truck1.AssignDriver("Driver1", true, 3);

console.log("Trip Truck1:");
truck1.trip();

const truck2 = new Truck("Blue",11000, 95, "Skoda", "Superb");
truck2.AssignDriver("Driver2", false, 1);

console.log("Trip Truck2:");
truck2.trip();
console.log("----------------------------------");

class Square {
    constructor(a) {
        this.a = a;
    }

    length() {
        console.log("sum of sides: ", 4 * this.a);
    }

    square() {
        console.log("area of the square: " + this.a * this.a);
    }

    info() {
        console.log("side lengths: " + this.a + ", " + this.a + ", " + this.a + ", " + this.a);
        console.log("sum of all sides: " + 4 * this.a);
        console.log("angles: 90°, 90°, 90°, 90°");
        console.log("area of the square: " + this.a * this.a);
    }

    static help() {
        console.log("square is a regular quadrilateral with four equal sides and four right angles");
    }
}

console.log("1.2.14");
Square.help();

console.log("1.2.15");

const square = new Square(10);


square.length();
square.square();
square.info();

console.log("1.2.16");
class Rectangle extends Square {
    constructor(a, b) {
        super(a);
        this.b = b;
    }

    //1.2.22
    get a() {
        return this._a;
    }

    set a(value) {
        if (typeof value === 'number' && value > 0) {
            this._a = value;
        } else {
            console.error("Invalid value for side 'a'");
        }
    }

    get b() {
        return this._b;
    }

    set b(value) {
        if (typeof value === 'number' && value > 0) {
            this._b = value;
        } else {
            console.error("Invalid value for side 'b'");
        }
    }

  static help() {
      console.log("A rectangle is a four-sided figure with opposite sides equal and four right angles.");
  }

  length() {
      console.log("Sum of sides:", 2 * (this.a + this.b));
  }

  square() {
      console.log("Area of the rectangle:", this.a * this.b);
  }

  info() {
      console.log("Side lengths:", this.a + ", " + this.a + ", " + this.b + ", " + this.b);
      console.log("Sum of all sides:", 2 * (this.a + this.b));
      console.log("Angles: 90°, 90°, 90°, 90°");
      console.log("Area of the rectangle:", this.a * this.b);
  }
}

const rectangle = new Rectangle(15, 10); 
console.log(rectangle); 
console.log("1.2.17");
rectangle.length(); 
rectangle.square(); 
rectangle.info(); 

class Rhombus extends Square {
    constructor(a, alpha, beta) {
        super(a);
        this.alpha = alpha;
        this.beta = beta;
    }

    static help() {
        console.log("rhombus is a quadrilateral with all four sides of equal length.");
    }

    length() {
        console.log("Sum of all sides: " + 4 * this.a);
    }

    square() {
        console.log("Area of the rhombus: " + 0.5 * this.a * this.a * Math.sin(this.alpha * Math.PI / 180));
    }

    info() {
        console.log("Side length: " + this.a);
        console.log("Sum of all sides: " + 4 * this.a);
        console.log("Angles: " + this.alpha + "°, " + this.beta + "°, " + this.alpha + "°, " + this.beta + "°");
        console.log("Area of the rhombus: " + 0.5 * this.a * this.a * Math.sin(this.alpha * Math.PI / 180));
    }
}


console.log("1.2.19");
const rhombus = new Rhombus(10, 100, 80);
Rhombus.help(); 
rhombus.length();
rhombus.square(); 
rhombus.info(); 

class Parallelogram extends Rhombus {
    constructor(a, b, alpha, beta) {
        super(a, alpha, beta);
        this.b = b;
    }

    static help() {
        console.log("parallelogram is a quadrilateral with opposite sides parallel");
    }

    length() {
        console.log("Side lengths: " + this.a + ", " + this.b + ", " + this.a + ", " + this.b);
        console.log("Angles: " + this.alpha + "°, " + (180 - this.alpha) + "°, " + this.beta + "°, " + (180 - this.beta) + "°");
        console.log("Sum of all sides: " + (2 * this.a + 2 * this.b));
    }

    square() {
        console.log("Area of the parallelogram: " + (this.a * Math.sin(this.beta * (Math.PI / 180)) * this.b));
    }

    info() {
        console.log("Side lengths: " + this.a + ", " + this.b + ", " + this.a + ", " + this.b);
        console.log("Angles: " + this.alpha + "°, " + (180 - this.alpha) + "°, " + this.beta + "°, " + (180 - this.beta) + "°");
        console.log("Sum of all sides: " + (2 * this.a + 2 * this.b));
        console.log("Area of the parallelogram: " + (this.a * Math.sin(this.beta * (Math.PI / 180)) * this.b));
    }
}

console.log("1.2.21");
const parallelogram = new Parallelogram(10, 5, 110, 70); 
Parallelogram.help(); 
parallelogram.length(); 
parallelogram.square(); 
parallelogram.info(); 


console.log("1.2.23");
Square.help();
Rectangle.help();
Rhombus.help();
Parallelogram.help();

console.log("1.2.24");
const square1 = new Square(10);
console.log("Square:");
square.info();


const rectangle1 = new Rectangle(7, 8);
console.log("Rectangle:");
rectangle.info();

const rhombus1 = new Rhombus(7, 40, 140);
console.log("Rhombus:");
rhombus.info();

const parallelogram1 = new Parallelogram(15, 27, 40, 140);
console.log("Parallelogram:");
parallelogram.info();
console.log("----------------------------------");
console.log("1.2.25");
const Triangular = (a = 3, b = 4, c = 5) => {
    return { a, b, c };
}

const defaultTriangle = Triangular();
console.log(defaultTriangle);


const Triangle = Triangular(7, 3, 10);
console.log(Triangle);

const { a, b, c } = Triangular(7, 8, 9);

console.log(`a: ${a}, b: ${b}, c: ${c}`);

console.log("1.2.27-1.2.28");

const PiMultiplier = (number) => {
    return () => {
        return Math.PI * number;
    };
}

const multiply2Pi = PiMultiplier(2);
const multiply2DividedBy3Pi = PiMultiplier(2/3); 
const dividePiBy2 = PiMultiplier(1/2); 

console.log("Multiplied by 2:", multiply2Pi()); 
console.log("Multiplied by 2/3:",multiply2DividedBy3Pi()); 
console.log("Multiplied by 1/2:",dividePiBy2()); 

const Painter = (color) => {
    return function(object) {
        const type = object.type ? object.type : "No 'type' property occurred!";
        console.log(`Color: ${color}, Type: ${type}`);
    };
}

const paintBlueColor = Painter('Blue');
const paintGreenColor = Painter('Green');

const obj1 = { type: 'Square' };
const obj2 = { shape: 'Rectangle' };

console.log("1.2.29");
paintBlueColor(obj1);
paintGreenColor(obj2);

const PaintBlue = Painter('Blue');
const PaintRed = Painter('Red');
const PaintYellow = Painter('Yellow');

const obj3 = { type: 'Rectangle' };
const obj4 = { type: 'Square' };
const obj5 = { shape: 'Triangle' };

console.log("1.2.30");
PaintBlue(obj3);
PaintRed(obj4);
PaintBlue(obj5);

const obj6 = {
    maxSpeed: 280,
    type: 'Sportcar',
    color: 'magenta'
};

const obj7 = {
    type: 'Truck',
    avgSpeed: 90,
    loadCapacity: 2400
};

const obj8 = {
    maxSpeed: 180,
    color: 'purple',
    isCar: true
};

const PaintBlueObj = Painter('Blue');
const PaintRedObj = Painter('Red');
const PaintYellowObj = Painter('Yellow');

console.log("1.2.31");
PaintBlue(obj6);
PaintRed(obj7); 
PaintBlue(obj8); 
console.log("----------------------------------");