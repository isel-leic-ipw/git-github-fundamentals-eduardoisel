let numbers = ["one", "two", "three", "four"]
console.log(numbers.associateWith( str => str.length ))

// { one: 3, two: 3, three: 5, four: 4}


numbers.associateWith = function(){
        let object_of_return
    for (e in this) {
        const temp = this[e]
        object_of_return[temp] = transformation()
    }
    return object_of_return
    }
