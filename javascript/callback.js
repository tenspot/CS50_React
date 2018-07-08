// Edx: Harvard CS50 - Mobile App Development with React Native (July 2018)

// JavaScript, ES6 - Synchronous Asynch Single-Threaded

// JavaScript is synchrounois and single threaded but has some asynch functions and uses callbacks
// to respond.

// Example of callback

function doSomethingAsynch(callback) {
    setTimeout(function() { callback(1) }, 1000)
}

doSomethingAsynch(console.log)

// Nested callbacks can get messy - callback hell!

// Use Promises to aliviate callback hell.

// Promise example (non-working)
fetch(url)
.then(function(response) {
    return response.json()
})
.then(function(json) {
    return importantData: json.importantData,
})
.then(function(data) {
    console.log(data)
})
.catch(function(err) {
    // handle errors here
})

// Asynch/Await (from 2017 ES7)- new syntax for asynchronoius programming

