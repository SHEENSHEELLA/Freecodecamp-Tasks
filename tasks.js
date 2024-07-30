// Step 9
let character = 'Hello'
console.log(character)
character = 'World'
let secondCharacter
console.log(secondCharacter)

// Step 10
secondCharacter = 'Test'
console.log(secondCharacter)

// Step 11
secondCharacter = 'Test'
secondCharacter = character

// Step 13
let profession = 'teacher'
let age
console.log(profession)
console.log(age)

//step 15
let count = 8

//step 16
console.log(count + 1)

//step 18
let rows = []

//step 19
rows = ['Naomi', 'Quincy', 'CamperChan']

//step 20
console.log(rows[0])

//step 21
rows[2] = 10
console.log(rows)

//step 22
rows[rows.length - 1] = 10

//step 24
let cities = ['London', 'New York', 'Mumbai']
console.log(cities)
cities[cities.length - 1] = 'Mexico City'
console.log(cities)

//step 26

//step 27
let popped = rows.pop()
console.log(rows)
console.log(popped)

//step 33
for ('iterator'; 'condition'; 'iteration') {
  logic
}

//step 37
for (let i = 0; i < count; i = i + 1) {
  console.log(i)
}

//step 38
for (let i = 0; i < count; i = i + 1) {
  rows.push(i)
}

//step 41
for (const row of rows) {
}

//step 42
for (const row of rows) {
  result = row + result
}

//step 43
for (const row of rows) {
  result = result + '\n' + row
}

//step 45
for (let i = 0; i < count; i = i + 1) {
  rows.push(character.repeat(i))
}

//step 47
function padRow() {}

//step 49
const call = padRow()

//step 51
function padRow() {
  return 'Hello!'
}

//step 55
function addTwoNumbers(firstNumber, secondNumber) {
  return firstNumber + secondNumber
}

const sum = addTwoNumbers(5, 10)
console.log(sum)

//step 61
function padRow() {
  const test = 'Testing'

  return test
}

//step 67
for (let i = 0; i < count; i = i + 1) {
  rows.push(padRow(i + 1, count))
}

//step 70
function padRow(rowNumber, rowCount) {
  return (
    ' '.repeat(rowCount - rowNumber) +
    character.repeat(2 * rowNumber - 1) +
    ' '.repeat(rowCount - rowNumber)
  )
}

//step 76
//In JavaScript, you can use // to leave a single-line comment in your code.

//step 77
/*for (let i = 1; i <= count; i++) {
  rows.push(padRow(i, count));
}*/

//step 78
if (true) {
  console.log('Condition is true')
}

//step 80
if ('false') {
  console.log('Condition is true')
}

//step 82
if ('') {
  console.log('Condition is true')
} else if (5 < 10) {
  console.log('5 is less than 10')
}

//step 84
let continueLoop = false
let done = 0

//step 85
while (continueLoop) {}

//step 86
while (continueLoop) {
  done++
}
