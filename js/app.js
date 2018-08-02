// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// Array holding fontawesome icons
const pictureArr = [
  "fa fa-bicycle",
  "fa fa-bicycle",
  "fa fa-bomb",
  "fa fa-bomb",
  "fa fa-hourglass",
  "fa fa-hourglass",
  "fa fa-twitter",
  "fa fa-twitter",
  "fa fa-facebook-f",
  "fa fa-facebook-f",
  "fa fa-leaf",
  "fa fa-leaf",
  "fa fa-android",
  "fa fa-android",
  "fa fa-anchor",
  "fa fa-anchor"
];

/*
+ function to Build Grid of cards dynamically.
*/
function buildGrid() {
  const docFragment = document.createDocumentFragment();
  shuffle(pictureArr); //Returns a shuffled array of pictures
  for (pict of pictureArr) {
    const cards = document.createElement("li");

    const picture = document.createElement("i");
    picture.setAttribute("class", pict);

    cards.appendChild(picture);
    cards.classList.add("card", "close");

    docFragment.appendChild(cards);
  }

  const cardsFrame = document.querySelector(".card_frame");

  cardsFrame.appendChild(docFragment);
}

// function to display card once clicked
const open = function() {};

// function to add card to a list of opened cards
const add = function() {};

// function to match cards
const match = function() {};

// function to close card and hide symbol
const hide = function() {};

// function to increament move counter
const moveCounter = function() {};

// function for finished game
const messageCongrats = function() {};

function gameStart() {
  // Using event deligation so i add just one click event to the frame holding the cards
  const cards = document.querySelector(".card_frame");

  //   declare and empty array to store clicked cards
  let openCards = [];

  //   loop through the card node list and respond to click events on any card
  cards.addEventListener("click", function(evt) {
    const targetCard = evt.target;

    //   wnat to be sure we are clicking on an element that represents a card
    if (targetCard.nodeName.toLowerCase() === "li") {
      // want to be sure that the card we are clicking is not having the classes open, show and match
      if (
        !targetCard.classList.contains("open") &&
        !targetCard.classList.contains("show") &&
        !targetCard.classList.contains("match")
      ) {
        // Add clicked card into the openCards array and add classes show, and open to them
        openCards.push(targetCard);
        targetCard.classList.add("open", "show");

        //Make sure we can only have a max of two cards in the array to check for a match
        if (openCards.length === 2) {
          if (
            openCards[0].firstChild.className ===
            openCards[1].firstChild.className
          ) {
            console.log("Match!");
            openCards[0].classList.add("match");
            openCards[1].classList.add("match");

            openCards[0].classList.remove("close");
            openCards[1].classList.remove("close");

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
      }
    }
  });
}

buildGrid();
gameStart();
