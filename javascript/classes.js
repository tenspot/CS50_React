// Edx: Harvard CS50 - Mobile App Development with React Native (July 2018)

// Video: React, Props, 

// Classes - Create a Set class


// Set should maintain a list of unique values and should support 'add', 'delete' and 'has'
// It should also be able to get its size.
class Set {
    constructor(arr) {
        this.arr = arr
    }

    add(val) {
        if (!this.has(val)) this.arr.push(val)
    }

    delete(val) {
        this.arr = this.arr.filter(x => x !== val)
    }

    has(val) {
        return this.arr.includes(val)
    }

    get size() {
        return this.arr.length
    }
}

// Instantiate and instace of the Set class.
const s = new Set([1,2,3,4,5])

// Trying to add an existing value shoudn't work.
s.add(1)
s.add(1)
s.add(1)
console.log('s should have five members and actually has:', s.size)

console.log('s should contain 5: ', s.has(6))

s.add(6)

console.log('s should now contain 6: ', s.has(6))
console.log('s should have 6 members and actually has:', s.size)

s.delete(6)
console.log('s should no longer contain 6: ', s.has(6))
console.log('s should have 5 members and actually has:', s.size)
