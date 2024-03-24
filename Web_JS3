//1.2.3
var car1 = new Object();
car1.color = "red";
car1.maxSpeed = 200;
car1.driver = {
    name: "John Doe",
    category: "C",
    personalLimitations: "No driving at night"
};
car1.tuning = true;
car1.numberOfAccidents = 0;
//1.2.4
var car2 = {
    color: "blue",
    maxSpeed: 180,
    driver: {
        name: "Jane Smith",
        category: "B",
        personalLimitations: null
    },
    tuning: false,
    numberOfAccidents: 2
};
//1.2.5
car1.drive = function() {
    console.log("I am not driving at night");
};
//1.2.6
car2.drive = function() {
    console.log("I can drive anytime");
};
//1.2.7
function Truck(color, weight, avgSpeed, brand, model) {
    this.color = color;
    this.weight = weight;
    this.avgSpeed = avgSpeed;
    this.brand = brand;
    this.model = model;
}
//1.2.8
function Truck(color, weight, avgSpeed, brand, model) {
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
//1.2.9
function Truck(color, weight, avgSpeed, brand, model) {
    this.color = color;
    this.weight = weight;
    this.avgSpeed = avgSpeed;
    this.brand = brand;
    this.model = model;
    
    this.trip = function() {
        if (!this.driver) {
            console.log("No driver assigned");
        } else {
            var message = "Driver " + this.driver.name;
            if (this.driver.nightDriving) {
                message += " drives at night";
            } else {
                message += " does not drive at night";
            }
            message += " and has " + this.driver.experience + " years of experience";
            console.log(message);
        }
    };
}
//1.2.10 - 1.2.11

class Truck {
    constructor(color, weight, avgSpeed, brand, model) {
        this.color = color;
        this.weight = weight;
        this.avgSpeed = avgSpeed;
        this.brand = brand;
        this.model = model;
    }


    static AssignDriver(truck, name, nightDriving, experience) {
        truck.driver = {
            name: name,
            nightDriving: nightDriving,
            experience: experience
        };
    }


    trip() {
        if (!this.driver) {
            console.log("No driver assigned");
        } else {
            let message = `Driver ${this.driver.name}`;
            if (this.driver.nightDriving) {
                message += " drives at night";
            } else {
                message += " does not drive at night";
            }
            message += ` and has ${this.driver.experience} years of experience`;
            console.log(message);
        }
    }
}
let truck1 = new Truck("red", 5000, 60.5, "Ford", "F-150");
let truck2 = new Truck("blue", 6000, 55.0, "Chevrolet", "Silverado");
//1.2.12
class Square {
    constructor(a) {
        this.a = a;
    }
}

//1.2.13
class Square {
    constructor(a) {
        this.a = a;
    }
}

//1.2.14
class Square {
    constructor(a) {
        this.a = a;
    }

    static help() {
        console.log("A square is a quadrilateral with four equal sides and four right angles.");
    }
}
//1.2.15
class Square {
    constructor(a) {
        this.a = a;
    }

    static help() {
        console.log("A square is a quadrilateral with four equal sides and four right angles.");
    }

    length() {
        console.log("The length of all sides of the square is: ", 4 * this.a);
    }

    square() {
        console.log("The area of the square is: ", this.a * this.a);
    }

    info() {
        console.log("Square Characteristics:");
        console.log("Length of all sides:", 4 * this.a);
        console.log("Size of all angles: 90 degrees");
        console.log("Total length of sides:", 4 * this.a);
        console.log("Area:", this.a * this.a);
    }
}
//1.2.16
class Rectangle extends Square {
    constructor(a, b) {
        super(a);
        this.b = b;
    }
}
//1.2.17
class Rectangle extends Square {
    constructor(a, b) {
        super(a);
        this.b = b;
    }

    static help() {
        console.log("A rectangle is a quadrilateral with opposite sides equal and four right angles.");
    }

    length() {
        console.log("The length of the rectangle is: ", 2 * (this.a + this.b));
    }

    square() {
        console.log("The area of the rectangle is: ", this.a * this.b);
    }

    info() {
        console.log("Rectangle Characteristics:");
        console.log("Length of side 'a':", this.a);
        console.log("Length of side 'b':", this.b);
        console.log("Size of all angles: 90 degrees");
        console.log("Perimeter:", 2 * (this.a + this.b));
        console.log("Area:", this.a * this.b);
    }
}
//1.2.18 - 1.2.19
class Rhombus extends Square {
    constructor(a, alpha, beta) {
        super(a);
        this.alpha = alpha;
        this.beta = beta;
    }

    static help() {
        console.log("A rhombus is a quadrilateral with all four sides equal and opposite angles equal.");
    }

    length() {
        console.log("The perimeter of the rhombus is: ", 4 * this.a);
    }

    square() {
        console.log("The area of the rhombus is: ", this.a * this.a * Math.sin(this.alpha * Math.PI / 180));
    }

    info() {
        console.log("Rhombus Characteristics:");
        console.log("Length of side 'a':", this.a);
        console.log("Size of angle 'alpha' (obtuse angle):", this.alpha, "degrees");
        console.log("Size of angle 'beta' (acute angle):", this.beta, "degrees");
        console.log("Perimeter:", 4 * this.a);
        console.log("Area:", this.a * this.a * Math.sin(this.alpha * Math.PI / 180));
    }
}
//1.2.20
class Parallelogram extends Rectangle {
    constructor(a, b, alpha, beta) {
        super(a, b);
        this.alpha = alpha;
        this.beta = beta;
    }
}
//1.2.21
class Parallelogram extends Rectangle {
    constructor(a, b, alpha, beta) {
        super(a, b);
        this.alpha = alpha;
        this.beta = beta;
    }

    static help() {
        console.log("A parallelogram is a quadrilateral with opposite sides parallel and equal.");
    }

    length() {
        console.log("The perimeter of the parallelogram is: ", 2 * (this.a + this.b));
    }

    square() {
        console.log("The area of the parallelogram is: ", this.a * this.b * Math.sin(this.alpha * Math.PI / 180));
    }

    info() {
        console.log("Parallelogram Characteristics:");
        console.log("Length of side 'a':", this.a);
        console.log("Length of side 'b':", this.b);
        console.log("Size of angle 'alpha' (obtuse angle):", this.alpha, "degrees");
        console.log("Size of angle 'beta' (acute angle):", this.beta, "degrees");
        console.log("Perimeter:", 2 * (this.a + this.b));
        console.log("Area:", this.a * this.b * Math.sin(this.alpha * Math.PI / 180));
    }
}
//1.2.22
class Rhombus extends Square {
    constructor(a, alpha, beta) {
        super(a);
        this.alpha = alpha;
        this.beta = beta;
    }

    // Ґеттер та сеттер для alpha
    get angleAlpha() {
        return this.alpha;
    }

    set angleAlpha(value) {
        this.alpha = value;
    }

    // Ґеттер та сеттер для beta
    get angleBeta() {
        return this.beta;
    }

    set angleBeta(value) {
        this.beta = value;
    }
}
//1.2.23
Square.help();
Rectangle.help();
Rhombus.help();
Parallelogram.help();
//1.2.24
let square = new Square(5);
let rectangle = new Rectangle(4, 6);
let rhombus = new Rhombus(5, 60, 120);
let parallelogram = new Parallelogram(4, 6, 60, 120);

square.info();
rectangle.info();
rhombus.info();
parallelogram.info();
//1.2.25
function Triangular(a, b, c) {
    let p = (a + b + c) / 2;
    let area = Math.sqrt(p * (p - a) * (p - b) * (p - c));
    let height = 2 * area / a;

    return {
        sideA: a,
        sideB: b,
        sideC: c,
        area: area,
        height: height
    };
}
//1.2.26
function Triangular(a = 3, b = 4, c = 5) {
    return { a, b, c };
}
// 1.2.27
function PiMultiplier(num) {
    return function() {
        return Math.PI * num;
    };
}

const multiplyBy2 = PiMultiplier(2);
const multiplyBy32 = PiMultiplier(3/2);
const divideBy2 = PiMultiplier(1/2);

console.log("π * 2 =", multiplyBy2());
console.log("π * 3/2 =", multiplyBy32());
console.log("π / 2 =", divideBy2());

// 1.2.28
function Painter(color) {
    return function(obj) {
        if (obj && obj.type) {
            console.log(`${color}: ${obj.type}`);
        } else {
            console.log(`No 'type' property occurred!`);
        }
    };
}

// 1.2.29
const PaintBlue = Painter("Blue");
const PaintRed = Painter("Red");
const PaintYellow = Painter("Yellow");

const obj1 = { type: "Object 1" };
const obj2 = { type: "Object 2" };
const obj3 = { };

PaintBlue(obj1);
PaintRed(obj2);
PaintYellow(obj3);

// 1.2.30
function Painter(color) {
    return function(obj) {
        if (obj && obj.type) {
            console.log(`${color}: ${obj.type}`);
        } else {
            console.log(`No 'type' property occurred!`);
        }
    };
}

// 1.2.31
const PaintBlue = Painter("Blue");
const PaintRed = Painter("Red");
const PaintYellow = Painter("Yellow");
// Тестові об'єкти для функцій PaintBlue, PaintRed та PaintYellow
const obj1 = { maxSpeed: 280, type: "Truck" };
const obj2 = { maxSpeed: 180, type: "Sportcar", avgSpeed: 90, color: "purple" };
const obj3 = { color: "magenta", loadCapacity: 2400, isCar: true };

// Демонстрація роботи функцій
PaintBlue(obj1);
PaintRed(obj2);
PaintYellow(obj3);








