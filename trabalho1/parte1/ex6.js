function Spy(target, method) {
    let original = target[method];
    let cont = {
        count: 0
    }
    target[method] = function () {
        cont.count++
        original()
    };
    return cont
}

var spy = Spy(console, 'error')

console.error('calling console.error')
console.error('calling console.error')
console.error('calling console.error')

console.log(spy.count) // 3
