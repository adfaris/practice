var age = 27

var obj = {
  name: 'Jonas',
  city: 'Lisbon'
}

function change (a, b) {
  a = 30
  b.city = 'San Francisco'
}

change(age, obj)

console.log(age)
console.log(obj.city)
console.log(obj)
