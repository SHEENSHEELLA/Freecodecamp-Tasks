//step 1
function getAverage(scores) {
  let sum = 0
  for (let i = 0; i <= scores.length - 1; i++) {
    sum += scores[i]
  }
  const result = sum / scores.length
  return result
}

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]))
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]))

//another solution
function getAverage(scores) {
  let sum = 0

  for (const score of scores) {
    sum += score
  }

  return sum / scores.length
}

//step 2
function getGrade(score) {
  if (score === 100) {
    return 'A++'
  } else if (score <= 59) {
    return 'F'
  } else if (score <= 69) {
    return 'D'
  } else if (score <= 79) {
    return 'C'
  } else if (score <= 89) {
    return 'B'
  } else if (score <= 99) {
    return 'A'
  }
}

console.log(getGrade(96))
console.log(getGrade(82))
console.log(getGrade(56))

//step 3
function hasPassingGrade(score) {
  const result = getGrade(score)
  if (result !== 'F') {
    return true
  }
  return false
}

console.log(hasPassingGrade(100))
console.log(hasPassingGrade(53))
console.log(hasPassingGrade(87))

//another solution
function hasPassingGrade(score) {
  return getGrade(score) !== 'F'
}
