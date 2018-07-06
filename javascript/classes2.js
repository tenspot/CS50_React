// Edx: Harvard CS50 - Mobile App Development with React Native (July 2018)

// Video: React, Props, 

// Classes - Extend a class

class MySet extends Set {
    constructor(arr) {
        super(arr)
        this.originalArr = arr
    }

    add(val) {
        super.add(val)
        console.log(`added ${val} to the set!`)
    }

    toArray() {
        return Array.from(this)
    }

    reset() {
        return new MySet(this.originalArray)
    }
}

s = new MySet([1,2,3,4,5])

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

console.log('s to Array: ', s.toArray())

s.add(7)
s.add(8)
s.add(9)

console.log('s to Array: ', s.toArray())
s.reset()
console.log('s to Array: ', s.toArray())
