"use strict";

/*
===================================================
* Global variables and constants
===================================================
*/
// Select the frame holding the cards
const cards = document.querySelector(".card_frame");

// For Moves counter function
const moves = document.querySelector(".moves");

// For fiveStar function
const clearStars = document.querySelector(".stars");

//   declare and empty array to store clicked cards
let openCards = [];

// declare empty array to store matched cards
let matchedCards = [];

// track moves
let numberOfMoves = 0;

let clockId;
let time = 0;
let timeMinutes;
let timeSeconds;
const timer = document.querySelector(".time");

let starRating;
let rateValue;

// Array holding fontawesome icons
const pictureArr = [
  "fa fa-bicycle",
  "fa fa-bomb",
  "fa fa-hourglass",
  "fa fa-twitter",
  "fa fa-facebook-f",
  "fa fa-leaf",
  "fa fa-android",
  "fa fa-anchor"
];

// Doubles the Array
pictureArr.push(...pictureArr);

/*
* =======================================================
* Functions
* =======================================================
*/

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
  let currentIndex = array.length;
  let temporaryValue;
  let randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// function to Build Grid of cards dynamically.

function buildGrid() {
  const docFragment = document.createDocumentFragment();
  shuffle(pictureArr); //Returns a shuffled array of pictures
  // for (const pict of pictureArr) {
  pictureArr.forEach(function(pict) {
    const cards = document.createElement("li");

    const picture = document.createElement("i");
    picture.setAttribute("class", pict);

    cards.appendChild(picture);
    cards.classList.add("card", "close");

    docFragment.appendChild(cards);
  });

  const cardsFrame = document.querySelector(".card_frame");
  cardsFrame.appendChild(docFragment);
}

// function to display card once clicked
const open = function(targetCard) {
  //   want to be sure we are clicking on an element that represents a card
  if (targetCard.nodeName.toLowerCase() === "li") {
    // want to be sure that the card we are clicking is
    // not having the classes open, show and match
    if (
      !targetCard.classList.contains("open") &&
      !targetCard.classList.contains("show") &&
      !targetCard.classList.contains("match")
    ) {
      // Add clicked card into the openCards array and add
      // classes show, and open to them
      add(targetCard);
    }
  }
  return targetCard;
};

// function to add card to an array of opened cards
const add = function(targetCard) {
  openCards.push(targetCard);
  targetCard.classList.add("open", "show");
  //Make sure we can only have a max of two cards in
  // the array to check for a match
  if (openCards.length === 2) {
    movesCounter();
    if (
      openCards[0].firstChild.className === openCards[1].firstChild.className
    ) {
      // console.log("Match!");
      match();
      openCards = [];
    } else {
      setTimeout(function() {
        for (const card of openCards) {
          card.classList.remove("show", "open");
        }
        openCards = [];
      }, 500);
    }
  }
};

// function to match cards
const match = function() {
  openCards[0].classList.add("match");
  openCards[1].classList.add("match");

  openCards[0].classList.remove("close");
  openCards[1].classList.remove("close");

  matchedCards.push(openCards[0]);
  matchedCards.push(openCards[1]);

  // console.log(matchedCards.length);
};

// function to increament move counter
const movesCounter = function() {
  numberOfMoves += 1;
  // const moves = document.querySelector(".moves");
  moves.textContent = `${numberOfMoves} Moves`;

  gameRating();
};

// function to show modal
const showModal = function() {
  const sModal = document.querySelector(".bg-modal");
  sModal.setAttribute("style", "display: flex");

  const modalmoves = document.querySelector(".modal-moves");
  modalmoves.textContent = `Moves: ${numberOfMoves}`;

  const modalClock = document.querySelector(".modal-time");
  modalClock.textContent = `Time: ${timeMinutes}:${timeSeconds}`;

  // show ratings here
  const stars = document.querySelectorAll(".modalRating");
  for (let i = 0; i < stars.length; i++) {
    if (rateValue === 2) {
      // console.log("2 stars");
      stars[0].setAttribute("style", "display: none");
    }
    if (rateValue === 1) {
      // console.log("2 stars");
      stars[0].setAttribute("style", "display: none");
      stars[1].setAttribute("style", "display: none");
    }
  }
};

// function to hide modal
const hideModal = function() {
  const hModal = documen.querySelector(".close-modal");
  hModal.setAttribute("style", "display: none");
};

// function to start the clock
const startClock = function() {
  // let time = 0;
  clockId = setInterval(function() {
    time++;
    pageClock();
  }, 1000);
};

// function to stop the clock
const stopClock = function() {
  clearInterval(clockId);
};

// function to show clock on page
const pageClock = function() {
  // const timer = document.querySelector(".time");
  timeMinutes = Math.floor(time / 60);
  timeSeconds = time % 60;

  if (time < 10) {
    // console.log(`Time: 00:0${timeSeconds}`);
    timer.textContent = `Time: 00:0${timeSeconds}`;
  } else {
    // console.log(`Time: 0${timeMinutes}:${timeSeconds}`);
    timer.textContent = `Time: 0${timeMinutes}:${timeSeconds}`;
  }
};

// Game rating function
const gameRating = function() {
  starRating = document.querySelectorAll(".rating");
  for (let i = 0; i < starRating.length; i++) {
    if (numberOfMoves > 12) {
      starRating[0].setAttribute("style", "visibility: hidden");

      rateValue = 2;
    }

    if (numberOfMoves > 16) {
      starRating[0].setAttribute("style", "visibility: hidden");
      starRating[1].setAttribute("style", "visibility: hidden");

      rateValue = 1;
    }
  }
};

// funtion to build star rating
const fiveStars = function() {
  for (let i = 0; i < 3; i++) {
    const star = document.createElement("li");

    const picture = document.createElement("i");
    picture.setAttribute("class", "fa fa-star rating");
    picture.setAttribute("style", "padding-left: 5px;");

    star.appendChild(picture);

    clearStars.appendChild(star);
  }
};

// Reset the game
const resetButton = document.querySelector(".reset");
resetButton.addEventListener("click", function() {
  while (cards.hasChildNodes()) {
    cards.removeChild(cards.lastChild);
  }

  while (clearStars.hasChildNodes()) {
    clearStars.removeChild(clearStars.lastChild);
  }

  openCards = [];
  matchedCards = [];
  numberOfMoves = 0;
  moves.textContent = `${numberOfMoves} Moves`;

  timeMinutes = 0;
  timeSeconds = 0;
  time = 0;

  timer.textContent = `Time: 0${timeMinutes}:0${timeSeconds}`;

  // startClock();
  fiveStars();
  buildGrid();
});

//   Using event delegation add click event on the frame holding the cards
cards.addEventListener("click", function _listener(evt) {
  const targetCard = evt.target;
  open(targetCard);

  // Number of matched cards determines the end of the game
  // After which the modal dialogue box will be displayed
  if (matchedCards.length === 16) {
    stopClock();
    gameRating();

    setTimeout(function() {
      cards.removeEventListener("click", _listener);
      showModal();
    }, 1000);
  }
});

/* ====================================
* Game Starts Here
* =====================================
*/
// Build grid and start the clock as soon as the DOM loads
buildGrid();
startClock();
