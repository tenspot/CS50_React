

// Closure example
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

// Closures: Immediately Invoked Function Expression