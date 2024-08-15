function getRandomComputerResult() {
  const options = ['Rock', 'Paper', 'Scissors']
  const randomIndex = Math.floor(Math.random() * options.length)
  return options[randomIndex]
}

let playerScore = 0
let computerScore = 0

function hasPlayerWonTheRound(player, computer) {
  return (
    (player === 'Rock' && computer === 'Scissors') ||
    (player === 'Scissors' && computer === 'Paper') ||
    (player === 'Paper' && computer === 'Rock')
  )
}

function getRoundResults(userOption) {
  const computerResult = getRandomComputerResult()
  if (userOption === computerResult) {
    return `It's a tie! Both chose ${userOption}`
  } else if (hasPlayerWonTheRound(userOption, computerResult)) {
    playerScore += 1
    return `Player wins! ${userOption} beats ${computerResult}`
  } else {
    computerScore += 1
    return `Computer wins! ${computerResult} beats ${userOption}`
  }
}

const playerScoreSpanElement = document.getElementById('player-score')
const computerScoreSpanElement = document.getElementById('computer-score')
const roundResultsMsg = document.getElementById('results-msg')

function showResults(userOption) {
  roundResultsMsg.innerText = getRoundResults(userOption)
  playerScoreSpanElement.innerText = playerScore
  computerScoreSpanElement.innerText = computerScore
}

showResults('Rock')
