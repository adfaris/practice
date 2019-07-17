const numbers = [2, 3, 3, 4, 5, 6, 7, 9, 23, 45, 90]

const initialValue = 0
const cb = (accumulator, currentValue, currentIndex, sourceArray) => {
  console.log(accumulator, currentValue)
  return accumulator + currentValue
}
numbers.reduce(cb, initialValue)

const names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']

const countedNames = names.reduce((allNames, name) => {
  console.log(allNames, '<<<<<<<<<<<1')
  console.log(name, '<<<<<<<<<<<<<<<<2')
  if (name in allNames) {
    allNames[name]++
  } else {
    allNames[name] = 1
  }
  return allNames
}, {})

console.log(countedNames)

const countedNumbers = numbers.reduce((allNumbers, number) => {
  if (number in allNumbers) {
    allNumbers[number]++
  } else {
    allNumbers[number] = 1
  }
  return allNumbers
}, {})

console.log(countedNumbers)