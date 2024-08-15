function getRandomComputerResult() {
  const options = ['Rock', 'Paper', 'Scissors']
  const randomIndex = Math.floor(Math.random() * options.length)
  return options[randomIndex]
}

function hasPlayerWonTheRound(player, computer) {
  if (
    (player === 'Rock' && computer === 'Scissors') ||
    (player === 'Scissors' && computer === 'Paper') ||
    (player === 'Paper' && computer === 'Rock')
  ) {
    return true
  }
  return false
}
