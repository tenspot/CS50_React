// Edx: Harvard CS50 - Mobile App Development with React Native (July 2018)

// JavaScript, ES6 - Synchronous Asynch Single-Threaded

// JavaScript is synchrounois and single threaded but has some asynch functions.

// Example of Asynch function setTimeout()

function printOne(){
    console.log('one')
}

function printTwo(){
    console.log('two')
}

function printthree(){
    console.log('three')
}

// This will print 'three', 'two', 'one'
setTimeout(printOne, 1000)  // Delay 1 sec. before printing
setTimeout(printTwo, 0)
printthree()

// Execution Stack?



