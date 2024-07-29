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
