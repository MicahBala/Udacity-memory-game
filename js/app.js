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
+ Build Grid of cards dynamically.
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

const showCard = function(evt) {
  if (evt.target.nodeName.toLowerCase() === "li") {
    evt.target.classList.add("open", "show");
    // console.log(evt.target);
  } else {
    console.log("Sorry!");
  }
};

buildGrid();
//
const cards = document.querySelector(".card_frame");
cards.addEventListener("click", showCard);
