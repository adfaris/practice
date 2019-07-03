Array.prototype.forEach = (cb) => {
    for(let i = 0; i < arr.length; i++) {
        console.log (arr[i])
    }
}

function cb () {
}
let element = [1, 2, 3, 4, 5, 6, 7, 8]
element.forEach(cb)

// arr.forEach(callback(currentValue[, index[, array]])[, thisArg]);