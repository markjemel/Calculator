let homeNum = 0
let guestNum = 0
let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

function addOnePointHome () {
  sum = homeNum + 1
  homeScore.textContent = sum
  homeNum = sum
}

function addTwoPointsHome () {
  sum = homeNum + 2
  homeScore.textContent = sum
  homeNum = sum
}

function addThreePointsHome () {
  sum = homeNum + 3
  homeScore.textContent = sum
  homeNum = sum
}

function addOnePointGuest () {
  sum = guestNum + 1
  guestScore.textContent = sum
  guestNum = sum
}

function addTwoPointsGuest () {
  sum = guestNum + 2
  guestScore.textContent = sum
  guestNum = sum
}

function addThreePointsGuest () {
  sum = guestNum + 3
  guestScore.textContent = sum
  guestNum = sum
}