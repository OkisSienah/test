var player = {
    name: "Player 1",
    chips: 300,
    object: function() {
        playerEl.textContent = player.name + ": $" + player.chips
    },
    sayHello: function() {
        console.log("Hello")
    }
}

player.object()

console.log(player)
let PlayerName = "Player 1"
let Cards = []
let result = 0
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let resultEl = document.getElementById("result-el")
let playerEl = document.getElementById("player-el")
let cardsEl = document.getElementById("cards")

playerEl.textContent = player.name + ": $" + player.chips

console.log(Cards)

function randomCard() {
    let randNum = Math.floor(Math.random()*13) + 1
    if(randNum === 1) {
        return 11
    } else if(randNum > 10) {
        return 10
    } else {
        return randNum
    }
}

function start() {
    isAlive = true
    let card1 = randomCard()
    let card2 = randomCard()
    Cards = [card1, card2]
    result = card1 + card2
    render()
}

function render() {
    messageEl = document.querySelector("#message-el")
    cards = document.getElementById("cards")
    resultEl = document.querySelector("#result-el")
    for(let i=0; i<Cards.length; i++) {
        cards.textContent += Cards[i] + " "
    }
    resultEl.textContent = "Result: " + result
    if(result <= 20) {
        message = "Do you want draw a new card?"
    } else if(result === 21) {
        message = "You got a Blackjack"
        hasBlackJack = true
    } else {
        message = "You lose!"
        isAlive = false
    }
    messageEl.textContent = message
}

function newcard() {
    if(isAlive === true && hasBlackJack === false) {
        let card = randomCard()
        result += card    
        Cards.push(card)
        console.log(Cards)
        render()
    }
}
