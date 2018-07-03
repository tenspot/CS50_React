// Edx: Harvard CS50 - Mobile App Development with React Native (July 2018)

// JavaScript, ES6

// this keyword - refers to an object that is set at the creation of a new 
// execution context (function invocation)

// Example
const person = {
    name: 'John',
    greet: function() { console.log( 'Hello, ' + this.name) },
}

// prints 'John'
person.greet

// prints 
const greet = person.greet

const friend = {
    name: 'David',
}

// prints 'David'
friend.greet()