// Create an object car2 with the following properties:
const car2 = {
  color: "Green",
  maxSpeed: 300,
  driver: {
      name: "Driver2",
      category: "A",
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
