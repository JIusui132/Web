// Клас Truck
class Truck {
    constructor(color, weight, avgSpeed, brand, model) {
        this.color = color;
        this.weight = weight;
        this.avgSpeed = avgSpeed;
        this.brand = brand;
        this.model = model;
    }

    // Статичний метод для призначення водія
    static AssignDriver(truck, name, nightDriving, experience) {
        truck.driver = {
            name: name,
            nightDriving: nightDriving,
            experience: experience
        };
    }

    // Метод для виконання поїздки
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

// Екземпляри класу Truck
let truck1 = new Truck("red", 5000, 60.5, "Ford", "F-150");
let truck2 = new Truck("blue", 6000, 55.0, "Chevrolet", "Silverado");

// Клас Square
class Square {
    constructor(a) {
        this.a = a;
    }

    // Статичний метод для пояснення квадрата
    static help() {
        console.log("A square is a quadrilateral with four equal sides and four right angles.");
    }

    // Метод для визначення довжини сторін
    length() {
        console.log("The length of all sides of the square is: ", 4 * this.a);
    }

    // Метод для визначення площі
    square() {
        console.log("The area of the square is: ", this.a * this.a);
    }

    // Метод для виведення інформації про квадрат
    info() {
        console.log("Square Characteristics:");
        console.log("Length of all sides:", 4 * this.a);
        console.log("Size of all angles: 90 degrees");
        console.log("Total length of sides:", 4 * this.a);
        console.log("Area:", this.a * this.a);
    }
}

// Клас Rectangle
class Rectangle extends Square {
    constructor(a, b) {
        super(a);
        this.b = b;
    }

    // Статичний метод для пояснення прямокутника
    static help() {
        console.log("A rectangle is a quadrilateral with opposite sides equal and four right angles.");
    }

    // Перевизначення методу для визначення довжини сторін
    length() {
        console.log("The length of the rectangle is: ", 2 * (this.a + this.b));
    }

    // Перевизначення методу для визначення площі
    square() {
        console.log("The area of the rectangle is: ", this.a * this.b);
    }

    // Перевизначення методу для виведення інформації про прямокутник
    info() {
        console.log("Rectangle Characteristics:");
        console.log("Length of side 'a':", this.a);
        console.log("Length of side 'b':", this.b);
        console.log("Size of all angles: 90 degrees");
        console.log("Perimeter:", 2 * (this.a + this.b));
        console.log("Area:", this.a * this.b);
    }
}

// Клас Rhombus
class Rhombus extends Square {
    constructor(a, alpha, beta) {
        super(a);
        this.alpha = alpha;
        this.beta = beta;
    }

    // Статичний метод для пояснення ромба
    static help() {
        console.log("A rhombus is a quadrilateral with all four sides equal and opposite angles equal.");
    }

    // Перевизначення методу для визначення периметра
    length() {
        console.log("The perimeter of the rhombus is: ", 4 * this.a);
    }

    // Перевизначення методу для визначення площі
    square() {
        console.log("The area of the rhombus is: ", this.a * this.a * Math.sin(this.alpha * Math.PI / 180));
    }

    // Перевизначення методу для виведення інформації про ромб
    info() {
        console.log("Rhombus Characteristics:");
        console.log("Length of side 'a':", this.a);
        console.log("Size of angle 'alpha' (obtuse angle):", this.alpha, "degrees");
        console.log("Size of angle 'beta' (acute angle):", this.beta, "degrees");
        console.log("Perimeter:", 4 * this.a);
        console.log("Area:", this.a * this.a * Math.sin(this.alpha * Math.PI / 180));
    }
}

// Клас Parallelogram
class Parallelogram extends Rectangle {
    constructor(a, b, alpha, beta) {
        super(a, b);
        this.alpha = alpha;
        this.beta = beta;
    }

    // Статичний метод для пояснення паралелограма
    static help() {
        console.log("A parallelogram is a quadrilateral with opposite sides parallel and equal.");
    }

    // Перевизначення методу для визначення периметра
    length() {
        console.log("The perimeter of the parallelogram is: ", 2 * (this.a + this.b));
    }

    // Перевизначення методу для визначення площі
    square() {
        console.log("The area of the parallelogram is: ", this.a * this.b * Math.sin(this.alpha * Math.PI / 180));
    }

    // Перевизначення методу для виведення інформації про паралелограм
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

// Клас Rhombus з додаванням геттерів та сеттерів для кутів
class Rhombus extends Square {
    constructor(a, alpha, beta) {
        super(a);
        this.alpha = alpha;
        this.beta = beta;
    }

    // Геттер для кута alpha
    get angleAlpha() {
        return this.alpha;
    }

    // Сеттер для кута alpha
    set angleAlpha(value) {
        this.alpha = value;
    }

    // Геттер для кута beta
    get angleBeta() {
        return this.beta;
    }

    // Сеттер для кута beta
    set angleBeta(value) {
        this.beta = value;
    }
}

// Виклик методу help для всіх класів
Square.help();
Rectangle.help();
Rhombus.help();
Parallelogram.help();

// Створення екземплярів і виведення інформації про них
let square = new Square(5);
let rectangle = new Rectangle(4, 6);
let rhombus = new Rhombus(5, 60, 120);
let parallelogram = new Parallelogram(4, 6, 60, 120);

square.info();
rectangle.info();
rhombus.info();
parallelogram.info();

// Функція для обчислення параметрів трикутника
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

// Функція для створення об'єкту трикутника зі значеннями за замовчуванням
function Triangular(a = 3, b = 4, c = 5) {
    return { a, b, c };
}

// Функція для множення числа на π
function PiMultiplier(num) {
    return function() {
        return Math.PI * num;
    };
}

// Функція для розфарбовування об'єктів
function Painter(color) {
    return function(obj) {
        if (obj && obj.type) {
            console.log(`${color}: ${obj.type}`);
        } else {
            console.log(`No 'type' property occurred!`);
        }
    };
}

// Виклики функцій
const multiplyBy2 = PiMultiplier(2);
const multiplyBy32 = PiMultiplier(3/2);
const divideBy2 = PiMultiplier(1/2);

console.log("π * 2 =", multiplyBy2());
console.log("π * 3/2 =", multiplyBy32());
console.log("π / 2 =", divideBy2());

const PaintBlue = Painter("Blue");
const PaintRed = Painter("Red");
const PaintYellow = Painter("Yellow");

const obj1 = { type: "Object 1" };
const obj2 = { type: "Object 2" };
const obj3 = { };

PaintBlue(obj1);
PaintRed(obj2);
PaintYellow(obj3);
