// Closures: Immediately Invoked Function Expression (IIFE)
// Does not add to global object

// Example 1

const sayHello = (function () {
    var message = 'Hello!'

    function sayHello() {
        console.log(message)
    }
    return sayHello
})()

console.log('typeof message: ', typeof message)
console.log(sayHello.toString())

sayHello()

//========================================================================

// Example 2
// Create a counter using an IIFE
// count variable is not accessable in the global scope.
const counter = (function() {
    let count = 0

    // Return two functions on the counter 'increment' and 'get'.
    return {
        inc: function() { count += 1},
        get: function() { console.log(count)},
    }
})()

counter.get()
counter.inc()
counter.get()

// Example 3

// Closure example - 
function makeFuncArray() {
    const arr = []
    // Change 'var' to 'let' to fix this closure error
    for (var i = 0; i < 5; i++) {
        arr.push(function() {console.log(i)})
    }
    return arr
}

const arr = makeFuncArray()

for (let i = 0; i < 5; i++) {
    arr[i]()
}

// This prints all 5's, shold print 0,1,2,3 and 4
// Can solve this with an IIFE implementation...
function makeFuncArray1() {
    const arr1 = []
    // 
    for (var i = 0; i < 5; i++) {
        arr1.push((function(x) {
            return function () { console.log(x) }
        })(i))
    }
    return arr1
}


const arr2 = makeFuncArray1()

for (let i = 0; i < 5; i++) {
    arr2[i]()
}