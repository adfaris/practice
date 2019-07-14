
const numbers = [8, 3, 22, 0, -73, 15]
let result = ''
const numDividedBy2 = (arr) => {
  result = arr.map((num) => {
    return num / 2
  })
  return result
}

console.log(numDividedBy2(numbers))
