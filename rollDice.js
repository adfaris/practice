// 11.
// Imagine you throw two six sided dice and sum up the total.
// Write a loop that logs every possible score you could roll.
// Used a nested for loop ( a loop inside of a loop)
// Bonus Challenge: Don't log repeats.
let roll1 = [1, 2, 3, 4, 5, 6]
let roll2 = [1, 2, 3, 4, 5, 6]
let sum = 0
let result = []
for (let i = 0; i < roll1.length; i++) {
  for (let j = 0; j < roll2.length; j++) {
    console.log(roll1[i], roll2[j], i + j)
    result.push((sum += roll1[i] + roll2[i]))
  }
}
console.log(result, result.length)
