function checkUsersValid(good_users){
    return function(users){
       return users.every(user => good_users.some(good_user => good_user.id == user.id))
    }
}

var goodUsers = [
    { id: 1 },
    { id: 2 },
    { id: 3 }
 ]
 
//console.log(goodUsers[1])
//console.log(goodUsers[1].id)
 
 // `checkUsersValid` is the function you'll define
 var testAllValid = checkUsersValid(goodUsers)
 
 console.log(testAllValid([ { id: 2 }, { id: 1 }]))
 // => true
 
 console.log(testAllValid([{ id: 2 },{ id: 4 },{ id: 1 }]))
 // => false
 