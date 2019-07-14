/**
 * var newArray = arr.filter(callback(element[, index[, array]])[, thisArg])
 */

// const names = ['sam', 'Maz', 'Dina']
let nums = [3, 5, 3, 5, 6, 8, 90, 78]
// let finding = ''

const callback = (element, index, array) => {
//   console.log(element, index, array)
  return element >= 3
}

console.log(nums.filter(callback))
// console.log(finding)
