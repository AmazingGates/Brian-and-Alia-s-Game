const computerChoiceDisplay = document.getElementById('computer-choice')
const playerChoiceDisplay = document.getElementById('player-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let playerChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    playerChoice = e.target.id
    playerChoiceDisplay.innerHTML = playerChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNunber = Math.floor(Math.random() * 3) + 1 // or you can use possibleChoices.length
    
    if (randomNunber === 1) {
        computerChoice = 'rock'
    }
    if (randomNunber === 2) {
        computerChoice = 'scissors'
    }
    if (randomNunber === 3) {
        computerChoice = 'paper'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === playerChoice) {
        result = "It's a Draw!"
    }
    if (computerChoice === 'rock' && playerChoice === 'paper') {
        result = "You Win!"
    }
    if (computerChoice === 'rock' && playerChoice === 'scissors') {
        result = "You Lose!"
    }
    if (computerChoice === 'paper' && playerChoice === 'rock') {
        result = "You Lose!"
    }
    if (computerChoice === 'paper' && playerChoice === 'scissors') {
        result = "You Win!"
    }
    if (computerChoice === 'scissors' && playerChoice === 'rock') {
        result = "You Win!"
    }
    if (computerChoice === 'scissors' && playerChoice === 'paper') {
        result = "You Lose!"
    }
    resultDisplay.innerHTML = result
}