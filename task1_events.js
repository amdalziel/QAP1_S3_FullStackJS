// NPM Core Package - Events 


// Summary: 





// Code: 

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

  
// An array of the number of listeners for the 'event' (In this case, FOUR events)
  console.log(eventEmitter.listeners('event'));
  
// Raise the 'event' - and pass through the args needed for the last event (different deals)  
  eventEmitter.emit('event', 'No returns after 30 days', 'Free shipping ends on January 31st', 'All shirts - Buy one, Get one free');

