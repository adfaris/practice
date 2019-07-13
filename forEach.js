const numbers = [3, 4, 5, 6, 79, 99, 999, 300]

const callback = (current, index, array, thisArg) => {
  console.log(current, index, array, this)
}
numbers.forEach(callback)
