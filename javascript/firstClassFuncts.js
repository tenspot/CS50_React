// Edx: Harvard CS50 - Mobile App Development with React Native (July 2018)

// JavaScript, ES6 - First Class Functions

// Example of map function

function map(arr, fn) {
    const newArr = []
    for(let i=0; i < arr.length; i++) {
        let val = arr[i]
        newArr.push(fn(val))
    }
    return newArr
}

// Test map

function addOne(num) {return num + 1 }

const x = [0, 1, 2, 3]

console.log(map(x, addOne)) // Returns [1, 2, 3, 4]