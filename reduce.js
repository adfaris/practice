const numbers = [2, 4, 5, 6, 7, 9, 23, 45, 90]

const initialValue = 0
const cb = (accumulator, currentValue, currentIndex, sourceArray) => {
  console.log(accumulator, currentValue)
  return accumulator + currentValue
}
numbers.reduce(cb, initialValue)

// const names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']

// const countedNames = names.reduce((allNames, name) => {
//   if (name in allNames) {
//     allNames[name]++
//   } else {
//     allNames[name] = 1
//   }
//   return allNames
// }, {})

// console.log(countedNames)
