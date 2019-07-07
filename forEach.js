// // Array.prototype.forEach = cb(elements)

// // function cb(elements) {
// //   for(let index = 0; index < elements.length; i++) {
// //       return elements[index], index
// // }
// const elements = [1, 2, 3, 4, 5, 6, 7, 8]
// // element.forEach(cb)

// // arr.forEach(callback(currentValue[, index[, array]])[, thisArg]);


// Array.prototype.forEach = function callback(element, index, array ) {
//     console.log(element, index)
// } 
// //     // make the code work again
// //     // map, filter, reduce, forEac


// // ['a', 'b', 'c'].forEach(console.log)

// elements.forEach(element => {
//     console.log(element)
// })

function callback(element, index, array) {
    console.log('a[' + index + '] = ' + element);
}

// Notice that index 2 is skipped since there is no item at
// that position in the array.
[2, 5, , 9].forEach(callback);
// logs:
// a[0] = 2
// a[1] = 5
// a[3] = 9