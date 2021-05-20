let firstCard = Math.floor( Math.random() * 11) 
let secondCard = Math.floor( Math.random() * 11) 
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard;
let hasBlackJack = false; 
let isAlive = true;
let message = "";
let startBtn = document.getElementById("start");
let drawBtn = document.getElementById("draw")
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum")
let cardsEl = document.querySelector(".cards");

function startGame() {
renderGame()
}

function renderGame() {
    sumEl.innerText = "Sum: " + sum;
    cardsEl.innerText = "Cards: " + cards[0] + " & " + cards[1];  

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
    let card = Math.floor( Math.random() * 11) 
    sum += card;
    renderGame()
}

startBtn.addEventListener("click", startGame)
drawBtn.addEventListener("click", newCard)


