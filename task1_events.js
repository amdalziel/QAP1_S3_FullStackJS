// NPM Core Package - Events 


// Summary: 





// Code: 


// Part 1: Using .on and .emit methods: 
const EventEmitter = require('events'); 
let eventEmitter = new EventEmitter(); 

// Initialize a counter to use to number events 
let steps=0; 


// First Event - welcome user to the store 
eventEmitter.on('event', sayHello =()=> {
    steps ++; 
    console.log(`#${steps}: Hello! Welcome to our website!`)}); 

// Second Event - browsing message 
eventEmitter.on('event', browseFeatures =()=> {
    steps ++; 
    console.log(`#${steps}: Browse our website for current deals. Our prices won't be beat!`)
} ); 

// Third Event - leave a comment 
eventEmitter.on('event', leaveComment =()=> {
    steps ++; 
    console.log(`#${steps}: Leave a comment below for a chance to win a $1,000 gift card.`)
} ); 

// Fourth Event - list current important reminders 
eventEmitter.on('event', finalReminders =(...args)=> {
    steps ++; 
    const reminders = args.join('\n* '); 
    console.log(`#${steps}: Store reminders: \n* ${reminders}. \nHave a great day!`); 
});

console.log("Part 1: Using .on and .emit methods:"); 
console.log();

  
// An array of the number of listeners for the 'event' (In this case, FOUR events)
  console.log(eventEmitter.listeners('event'));

// Raise the 'event' - and pass through the args needed for the last event (different deals)  
  eventEmitter.emit('event', 'No returns after 30 days', 'Free shipping ends on January 31st', 'All shirts - Buy one, Get one free');
  console.log(); 




//   Part 2: Object-Oriented Programming with 'Events'

// Define the class Shirt with three attributes - style, color and price 
class Shirt extends EventEmitter {
    constructor(style, color, price) {
        super(); 
        this.style = style;
        this.color = color;
        this.price = price; 
    }

    // Alter the price method - change the current object's price by increasing/decreasing by the amount entered by the user
    
    alterPrice(changePercent) {
        let priceStr = changePercent.toString(); 
        let typeAltered = priceStr.startsWith('-') ? "decreased" : "increased"; 

        console.log(`The ${this.color} ${this.style} shirt's price has ${typeAltered}.`); 

        let change = this.price * changePercent; 
        this.price += change; 

        // Raise the 'priceChange' event using the .emit method 
        this.emit('priceChange', {changePercent, typeAltered, price: this.price}); 
    }

}; // end of Shirt Class 


// Initiate two objects of the Shirt class 
const redShortShirt = new Shirt('short sleeves', 'red', 10);
const blueLongShirt = new Shirt('long sleeves', 'blue', 6.50);  

// Function to trigger the 'on' method by passing the name of the object as a parameter 
function addOnEvent(obj) {
    obj.on('priceChange', ({changePercent, typeAltered, price}) => {
        let changeStr = (changePercent * 100).toString(); 
        let changeToDisplay = changeStr.startsWith('-') ? changeStr.substring(1) : changeStr; 
        console.log(`The price has ${typeAltered} by ${changeToDisplay}%. The new price is $${price}.`); 
        console.log(); 
        }); 

}; 

console.log("Part 2: Object-Oriented Programming with 'Events':"); 
console.log();

// 
addOnEvent(redShortShirt); 
addOnEvent(blueLongShirt); 

// 
redShortShirt.alterPrice(-0.15); 
blueLongShirt.alterPrice(.3); 



