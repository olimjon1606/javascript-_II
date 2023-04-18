let card1 = 6
let card2 = 9
let sum = card1 + card2
let hasBlackjack = false
let isAlive = true
let massage = ""

if (sum <= 20) {
    massage = "Do you want draw a new card? "
} else if (sum == 21) {
    massage = "Woohoo! you got a blackjack"
    hasBlackjack = true
}
else {
    massage = "Sorry you are out of game!"
    isAlive = false
}