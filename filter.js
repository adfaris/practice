/**
 * var newArray = arr.filter(callback(element[, index[, array]])[, thisArg])
 */

// const names = ['Josiah', 'Zoe', 'Dina', 'A.D.']
let nums = [3, 5, 3, 5, 6, 8, 90, 78]
// let finding = ''

const callback = (element, index, array) => {
  console.log(element, index, array)
  return element > 3
}

nums.filter(callback)
// console.log(finding)
