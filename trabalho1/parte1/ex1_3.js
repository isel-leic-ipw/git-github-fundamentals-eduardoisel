/*
const validator = { name: "p1", validators: [s => typeof s == 'string' && s.length > 2, s => s[0] == "a"] }
const obj1 = { p1: "abc" }
const obj2 = { p2: 123 }
const obj3 = { p1: "a", p2: 123 }
*/
function validateProperty(obj, validator) {
    let bool = false
    let property

    for (let prop in obj) {
        if (prop == validator.name) {
            bool = true
            property = obj[prop]
        }
    }

    if (!bool)
        return false

    for (let e in validator.validators) {
        if (validator.validators[e](property) == false) {
            bool = false
            break
        }
    }

    return bool

}

//console.log(validateProperty(obj1, validator)) //true
//console.log(validateProperty(obj2, validator)) //false
//console.log(validateProperty(obj3, validator)) //false



const validators = [
    {
        name: "p1", validators: [s => typeof s == 'string' && s.length > 2, s => s[0] == "a"]
    },
    {
        name: "p2", validators: [s => Number.isInteger(s)]
    }
]


const obj1 = { p1: "a" }
const obj2 = { p1: 123 }
const obj3 = { p1: "abc", p2: 123 }

//console.log("return = " + validateProperties(obj1, validators)) // ["p1", "p2"]
//console.log("return ob2 = " + validateProperties(obj2, validators)) // ["p1", "p2"]
//console.log(validateProperties(obj3, validators)) // []

/*
function showProp(obj){
    for(let prop in obj){
        if(obj[prop] instanceof Function){
            const f = obj[prop]
            f()
        }else{
            console.log(prop + " = " + obj[prop])
        }   
    }
}

showProp(validators)
*/

function validateProperties(obj, validators) {
    if (validators.index == undefined)
        validators.index = 0

        console.log("index = " + validators.index)

    if (validators.array == undefined)
        validators.array = []

    if (!validateProperty(obj, validators[validators.index])) {
        const newindValidator = validators
        newindValidator.array.push(validators[validators.index].name)
        newindValidator.index = newindValidator.index + 1

        console.log("newindvalidators.index = " + newindValidator.index)

        if (validators[validators.index] != undefined)
            return(validateProperties(obj, newindValidator))

        return newindValidator.array
    }
    else if (validators[validators.index + 1] != undefined) {
        const newindValidator = validators
        newindValidator.index = newindValidator.index + 1

        return validateProperties(obj, newindValidator)
    }else return validators.array

}

Object.prototype.validateProperties = function() {return validateProperties(this, validators)}

 //console.log(obj1.validateProperties(validators)) // ["p1", "p2"]
 //console.log(obj2.validateProperties(validators)) // ["p1", "p2"]
 //console.log(obj3.validateProperties(validators)) // []

