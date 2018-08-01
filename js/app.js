/*
+ Build Grid of cards dynamically.
*/

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

function buildGrid() {
  const docFragment = document.createDocumentFragment();
  for (pict of pictureArr) {
    const cards = document.createElement("li");

    const picture = document.createElement("i");
    picture.setAttribute("class", pict);

    cards.appendChild(picture);
    cards.classList.add("card", "show", "open");

    docFragment.appendChild(cards);

    console.log(cards);
  }

  const cardsFrame = document.querySelector(".card_frame");

  cardsFrame.appendChild(docFragment);
}

buildGrid();
