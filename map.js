/**
 * var new_array = arr.map(function callback(currentValue[, index[, array]]) {
    // Return element for new_array
}[, thisArg])
  returns a new array
 */

const names = ['Josiah', 'Zoe', 'Dina', 'A.D.']
const nums = [3, 5, 3, 5, 6, 8, 90, 78]
let result = ''

const callback = (currentValue, index, array) => {
  console.log(currentValue, index, array)
  return currentValue
}

console.log(nums.map(callback))

// console.log(result)
