# Udacity Student Project - Memory Game.

## Introduction

This game is part of the Udacity Project for the completion of the Froned Web Development Nanodegree. The game is developed using HTML, CSS and Pure JavaScript.

## Acknowledgements

AS A part of the guide to developing the game, i consulted:

- Mentors on the Udacity Classroom
- Fellow course mates
- Shuffle function from http://stackoverflow.com/a/2450976 provided the shuffle function i used to shuffle the cards
- FEND Memory Game Walk Through with Mike Wales on https://www.youtube.com/watch?v=_rUH-sEs68Y
- https://www.diigo.com/outliner/fii42b/Udacity-Memory-Game-Project?key=dwj0y5x9cw

## Game Logic

There are 16 shuffled Cards arranged on a deck, clicking a card will flip the card open. User can only flip two cards at a time. If the picture on the flipped cards match, the two cards stay opened, and if they dont match, the cards automatically flips back to hide the pictures on them, either of the two conditions is counted as a single move by the moves counter at the top of the deck, while a timer keeps track of the time as you preogress in the game.

At any point during the game, you can choose to reset the game using the reset button at top right of the deck, which will shuffle the cards in the deck and reset the timer, and rating.

## Game Rating

The game starts showing a 3-Star rating. To maintain this rating, finish the game with a minimum of 12 Moves. When your moves exceeds 12 the rating drops to 2-Star and when it exceeds 16 moves, rating drops to 1-Star.

## Winning The Game

To win the game, keep clicking until you have been able to match the cards on the deck with the fewest possible clicks. After which a modal pops up with statistics telling you the number of moves you made while playing the game, the time it took you to play the game, and the star rating.

## READY? LET'S PLAY!

- [The Udacity Memory Game](https://MicahBala.github.io).
