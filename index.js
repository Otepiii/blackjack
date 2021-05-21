let player = {
    name: "Joe",
    chips: 145
}

let cards = []
let sum = 0;
let hasBlackJack = false; 
let isAlive = false;
let message = "";
let startBtn = document.getElementById("start");
let drawBtn = document.getElementById("draw")
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum")
let cardsEl = document.querySelector(".cards");

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips


function getRandomCard() {
    randomNumber = Math.floor( Math.random() * 13) + 1;
    if (randomNumber > 10) {
        return 10
    } else if( randomNumber === 1){
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    firstCard = getRandomCard()
    secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}


function renderGame() {
    sumEl.innerText = "Sum: " + sum;
    cardsEl.textContent = "Cards: " 
    for( let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " ";
    }

    if(sum < 21) {
        message = "Do you want to draw a new card? "
    } else if (sum === 21) {
        message = "you win "
        hasBlackJack = true
    } else {
        message = "You lose "
        isAlive = false;
    }
    messageEl.textContent = message
}

function newCard() {
    if(isAlive && !hasBlackJack) {
        let card = getRandomCard()
        sum += card;
        cards.push(card)
        console.log(cards)
        renderGame()
    }
}

startBtn.addEventListener("click", startGame)
drawBtn.addEventListener("click", newCard)


