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
