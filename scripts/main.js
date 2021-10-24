//next - make the first level with one enemy
//then - make the next level with more than one enemy
//to do on plane -- draw out the first 5 levels on paper

import kaboom from "https://unpkg.com/kaboom@next/dist/kaboom.mjs";

import Card from "./card.js";
import Deck from "./deck.js";

import {turnStatus, changeTurn} from "./turnsystem.js";

import {level1Map, level1MapConfig} from "./levels.js";

//creating basic kaboom instance
kaboom({
  width: 640,
  height: 480,
})

//loading sprites OUTSIDE OF SCENE ALWAYS
loadSprite('upSprite', './assets/up.png');
loadSprite('downSprite', './assets/down.png');
loadSprite('leftSprite', './assets/left.png');
loadSprite('rightSprite', './assets/right.png');

//loading in new tileset for use in levels.js
loadSprite('tileset', './assets/tileset.png', {
  sliceX: 3, //number of cuts to make, not the pixel size of the individual cuts
  sliceY: 4,
});

scene('level1', ()=> {

  //GLOBAL VARS
  let moveAmount = 32; //enemy movement amount

  //DECK INITIALIZATION
  const deck1 = new Deck;
  deck1.instantiateDeckCards();
  deck1.shuffleDeck();

  console.log(deck1.deckCards);

  //setting initial card sprites
  let card1ActualSprite = deck1.deckCards[deck1.deckCards.length - 1].cardSprite;
  let card2ActualSprite = deck1.deckCards[deck1.deckCards.length - 2].cardSprite;
  let card3ActualSprite = deck1.deckCards[deck1.deckCards.length - 3].cardSprite;


  //GAME OBJECTS
  //add level
  addLevel(level1Map, level1MapConfig);

  //level text basic
  add([
    text('1'),
    origin('center'),
    pos(width()/2, 48)
  ]);

  //add hand of cards left counter
  const cardsLeftText = add([
    text('cards left: ' + deck1.deckCards.length, {
      width: 128,
    }),
    scale(0.25),
    pos(0, 320),
    'cardsLeftText'
  ]);

  //player creation
  const player = add([
    pos(288, 192),
    rect(32, 32),
    area(),
    'player'
  ]);

  //enemy creation
  const enemy = add([
    rect(32, 32),
    pos(352, 192),
    color(124, 0, 0),
    area(),
    'enemy'
  ]);

  //wait button creation
  const waitButton = add([
    text('wait'),
    scale(0.35),
    pos(384 + 124 + 64, 320),
    area(),
    'waitButton'
  ]);

  //drawing card game objects
  const card1Actual = add([
    rect(96, 160),
    pos(96, 320),
    scale(0.106),
    sprite(card1ActualSprite),
    area(),
    'card1Actual',
    {
      value: deck1.deckCards.pop(),
    }
  ]);

  const card2Actual = add([
    rect(96, 160),
    pos(256, 320),
    scale(0.106),
    sprite(card2ActualSprite),
    area(),
    'card2Actual',
    {
      value: deck1.deckCards.pop()
    }
  ]);

  const card3Actual = add([
    rect(96, 160),
    pos(416, 320),
    scale(0.106),
    sprite(card3ActualSprite),
    area(),
    'card3Actual',
    {
      value: deck1.deckCards.pop()
    }
  ]);


  //TURN ORDER CONTROLLER + movement (turn status needs to be checked every frame)
  if (turnStatus > 0) { //meaning it is the player's turn
    //allow player movement using cards
    //on click for each card, execute card action, update card value, update card sprite
    clicks('card1Actual', ()=> {
      player.moveBy(card1Actual.value.executeCardAction());
      cardChange(deck1, card1Actual, card1ActualSprite);
      changeTurn();
    });
    clicks('card2Actual', ()=> {
      player.moveBy(card2Actual.value.executeCardAction());
      cardChange(deck1, card2Actual, card2ActualSprite);
      changeTurn();
    });
    clicks('card3Actual', ()=> {
      player.moveBy(card3Actual.value.executeCardAction());
      cardChange(deck1, card3Actual, card3ActualSprite);
      changeTurn();
    });
    clicks('waitButton', () => {
      //if you wait too many times, you run out of cards! - this is good
      deck1.shuffleDeck();
      cardChange(deck1, card1Actual, card1ActualSprite);
      cardChange(deck1, card2Actual, card2ActualSprite);
      cardChange(deck1, card3Actual, card3ActualSprite);
      console.log(deck1.deckCards);
      changeTurn();
    });
  }

  action ('enemy', () => {
    if (turnStatus < 0) { //meaning it's enemy turn, doesn't run because turn status situaiton isnt checked every frame
      //enemy movement
      //enemy ai
      //want the enemy to follow a set path, then if the player is within a certain
      //number of blocks of them, it should go to them
      //checks to see if player is outside of 1 tile of enemy
      if (player.pos.x < enemy.pos.x - 32 || player.pos.x > enemy.pos.x + 32
        || player.pos.y < enemy.pos.y - 32 || player.pos.y > enemy.pos.y + 32) {
            enemy.moveBy(0, moveAmount);
            changeTurn();
      }
      else {
        enemy.moveTo(player.pos.x, player.pos.y, 10000); //last arg is pixels per second
        changeTurn();
      }
    }
  });

  //COLLISIONS
  //player collision
  collides('player', 'enemy', () => {
    destroy(player);
  });
  collides('player', 'impassable-wall', () => {
    console.log('collide w wall');
    destroy(player);
  });
  collides('player', 'end-flag', () => {
    //add move to next level
    go('level2');
  });
  //enemy collisions
  collides('enemy', 'impassable-wall', () => {
    moveAmount = -moveAmount;
  });

  //UPDATES
  action('cardsLeftText', () => {
    cardsLeftText.use(text('cards left: ' + deck1.deckCards.length, {
          width: 128,
        }),);
  });

});

//FUNCTIONS
function cardChange(deckTemp, cardActualTemp, cardActualSpriteTemp) {
  cardActualTemp.value = deckTemp.deckCards.pop();
  cardActualSpriteTemp = cardActualTemp.value.cardSprite;
  cardActualTemp.use(sprite(cardActualSpriteTemp));
}

go('level1');
