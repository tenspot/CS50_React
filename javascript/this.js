// Edx: Harvard CS50 - Mobile App Development with React Native (July 2018)

// Video: JavaScript, ES6

// this keyword - refers to an object that is set at the creation of a new 
// execution context (function invocation)

// Example of 'this' keyword
const person = {
    name: 'John',
    greet: function() { console.log( 'Hello, ' + this.name) },
}

// prints 'John'
person.greet()

// prints 'undefined'
const greet = person.greet
greet()

const friend = {
    name: 'David',
}
friend.greet = person.greet
// prints 'David'
friend.greet()

/* To set 'this' can use bind(), call() or apply()
so can write:
    const greet = person.greet.bind( {name: 'text to print'} )
    person.greet.call( {name: 'text to print'} )
    person.greet.apply( {name: 'text to print'} )

    Note also the '=>' notation 
*/