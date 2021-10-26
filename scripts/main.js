//next - make the first level with one enemy
//then - make the next level with more than one enemy
//to do on plane -- draw out the first 5 levels on paper

import kaboom from "https://unpkg.com/kaboom@next/dist/kaboom.mjs";

import Card from "./card.js";
import Deck from "./deck.js";

import {turnStatus, changeTurn} from "./turnsystem.js";

import {level0Map, level1Map, level2Map, level3Map, levelMapConfig} from "./levels.js";

//creating basic kaboom instance
kaboom({
  width: 640,
  height: 480,
  background: [211, 211, 211]
})

//loading card sprites OUTSIDE OF SCENE ALWAYS
loadSprite('upSprite', './assets/up.png');
loadSprite('downSprite', './assets/down.png');
loadSprite('leftSprite', './assets/left.png');
loadSprite('rightSprite', './assets/right.png');

//loading in enemy sprites
loadSprite('octopus', './assets/enemyOptions/octopus.png');
loadSprite('rabbit', './assets/enemyOptions/rabbit.png');
loadSprite('lion', './assets/enemyOptions/lion.png');
loadSprite('fox', './assets/enemyOptions/fox.png');
loadSprite('caterpillar', './assets/enemyOptions/caterpillar.png');
loadSprite('bear', './assets/enemyOptions/bear.png');

//loading in new tileset for use in levels.js
loadSprite('tileset', './assets/tileset.png', {
  sliceX: 3, //number of cuts to make, not the pixel size of the individual cuts
  sliceY: 4,
});

loadSprite('checkeredFlag', './assets/checkeredflag.png');

//loading in player spritesheet
loadSprite('playerSpritesheet', './assets/playerSpritesheet.png', {
  sliceX: 5,
  sliceY: 3,
  anims: {
    idle: {from: 7, to: 7},
    run: { from: 7, to: 6}
  }
});


//SCENE 0


scene('level0', ()=> {
  let moveAmount = 32;

  const deck0 = new Deck;
  deck0.instantiateDeckCards();
  deck0.shuffleDeck();

  let card1ActualSprite = deck0.deckCards[deck0.deckCards.length - 1].cardSprite;
  let card2ActualSprite = deck0.deckCards[deck0.deckCards.length - 2].cardSprite;
  let card3ActualSprite = deck0.deckCards[deck0.deckCards.length - 3].cardSprite;

  addLevel(level0Map, levelMapConfig);

  //level text basic
  add([
    text('0'),
    origin('center'),
    pos(width()/2, 48)
  ]);

  //add hand of cards left counter
  const cardsLeftText = add([
    text('cards left: ' + deck0.deckCards.length, {
      width: 128,
    }),
    scale(0.25),
    pos(0, 320),
    'cardsLeftText'
  ]);

  //player creation
  const player = add([
    pos(288-96, 192),
    origin('botleft'),
    sprite('playerSpritesheet', {
      frame: 7,
      flipX: true,
    }),
    scale(0.16),
    area({
      width: 32,
      height: 32,
    }),
    'player'
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
      value: deck0.deckCards.pop(),
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
      value: deck0.deckCards.pop()
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
      value: deck0.deckCards.pop()
    }
  ]);

  cardController(player, deck0, card1Actual, card2Actual, card3Actual, card1ActualSprite, card2ActualSprite, card3ActualSprite);
  cardsLeftTextUpdate(cardsLeftText, deck0);
  registerPlayerCollisions(player, moveAmount, 'level1');

});


//SCENE 1


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
  addLevel(level1Map, levelMapConfig);

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
    pos(288-96, 192-32),
    origin('botleft'),
    sprite('playerSpritesheet', {
      frame: 7,
      flipX: true,
    }),
    scale(0.16),
    area({
      width: 32,
      height: 32,
    }),
    'player'
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

  cardController(player, deck1, card1Actual, card2Actual, card3Actual, card1ActualSprite, card2ActualSprite, card3ActualSprite);
  cardsLeftTextUpdate(cardsLeftText, deck1);
  registerPlayerCollisions(player, moveAmount, 'level2');

});


//SCENE 2


scene('level2', () =>{

  //GLOBAL VARS
  let moveAmount = 32; //enemy movement amount

  //DECK INITIALIZATION
  const deck2 = new Deck;
  deck2.instantiateDeckCards();
  deck2.shuffleDeck();

  console.log(deck2.deckCards);

  //setting initial card sprites
  let card1ActualSprite = deck2.deckCards[deck2.deckCards.length - 1].cardSprite;
  let card2ActualSprite = deck2.deckCards[deck2.deckCards.length - 2].cardSprite;
  let card3ActualSprite = deck2.deckCards[deck2.deckCards.length - 3].cardSprite;


  //GAME OBJECTS
  //add level
  addLevel(level2Map, levelMapConfig);

  //level text basic
  add([
    text('2'),
    origin('center'),
    pos(width()/2, 48)
  ]);

  //add hand of cards left counter
  const cardsLeftText = add([
    text('cards left: ' + deck2.deckCards.length, {
      width: 128,
    }),
    scale(0.25),
    pos(0, 320),
    'cardsLeftText'
  ]);

  //player creation
  const player = add([
    pos(288-128, 192+64),
    origin('botleft'),
    sprite('playerSpritesheet', {
      frame: 7,
      flipX: true,
    }),
    scale(0.16),
    area({
      width: 32,
      height: 32,
    }),
    'player'
  ]);

  //enemy creation
  const enemy = add([
    sprite('bear'),
    origin('botleft'),
    scale(0.06),
    pos(352, 192+32),
    area({
      width: 32,
      height: 32,
    }),
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
      value: deck2.deckCards.pop(),
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
      value: deck2.deckCards.pop()
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
      value: deck2.deckCards.pop()
    }
  ]);

  cardController(player, deck2, card1Actual, card2Actual, card3Actual, card1ActualSprite, card2ActualSprite, card3ActualSprite);
  cardsLeftTextUpdate(cardsLeftText, deck2);
  registerPlayerCollisions(player, moveAmount, 'level3');

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
        enemy.moveTo(player.pos.x, player.pos.y, ); //last arg is pixels per second
        changeTurn();
      }
    }
  });

  //enemy collisions
  collides('enemy', 'impassable-wall', () => {
    moveAmount = -moveAmount;
  });
});

//FUNCTIONS
function cardChange(deckTemp, cardActualTemp, cardActualSpriteTemp) {
  cardActualTemp.value = deckTemp.deckCards.pop();
  cardActualSpriteTemp = cardActualTemp.value.cardSprite;
  cardActualTemp.use(sprite(cardActualSpriteTemp));
}

function cardController(player, deck, card1Actual, card2Actual, card3Actual, card1ActualSprite, card2ActualSprite, card3ActualSprite) {
  //TURN ORDER CONTROLLER + movement (turn status needs to be checked every frame)
  if (turnStatus > 0) { //meaning it is the player's turn
    //allow player movement using cards
    //on click for each card, execute card action, update card value, update card sprite
    clicks('card1Actual', ()=> {
      player.moveBy(card1Actual.value.executeCardAction());
      cardChange(deck, card1Actual, card1ActualSprite);
      changeTurn();
    });
    clicks('card2Actual', ()=> {
      player.moveBy(card2Actual.value.executeCardAction());
      cardChange(deck, card2Actual, card2ActualSprite);
      changeTurn();
    });
    clicks('card3Actual', ()=> {
      player.moveBy(card3Actual.value.executeCardAction());
      cardChange(deck, card3Actual, card3ActualSprite);
      changeTurn();
    });
    clicks('waitButton', () => {
      //if you wait too many times, you run out of cards! - this is good
      deck.shuffleDeck();
      cardChange(deck, card1Actual, card1ActualSprite);
      cardChange(deck, card2Actual, card2ActualSprite);
      cardChange(deck, card3Actual, card3ActualSprite);
      console.log(deck.deckCards);
      changeTurn();
    });
  }
}

function cardsLeftTextUpdate(cardsLeftText, deck) {
  action('cardsLeftText', () => {
    cardsLeftText.use(text('cards left: ' + deck.deckCards.length, {
          width: 128,
        }),);
  });
}

function registerPlayerCollisions(player, moveAmount, nextLevel) {
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
    go(nextLevel);
  });
}


//SCENE 3


scene('level3', () =>{

  //GLOBAL VARS
  let moveAmount = 32; //enemy movement amount

  //DECK INITIALIZATION
  const deck3 = new Deck;
  deck3.instantiateDeckCards();
  deck3.shuffleDeck();

  console.log(deck3.deckCards);

  //setting initial card sprites
  let card1ActualSprite = deck3.deckCards[deck3.deckCards.length - 1].cardSprite;
  let card2ActualSprite = deck3.deckCards[deck3.deckCards.length - 2].cardSprite;
  let card3ActualSprite = deck3.deckCards[deck3.deckCards.length - 3].cardSprite;


  //GAME OBJECTS
  //add level
  addLevel(level3Map, levelMapConfig);

  //level text basic
  add([
    text('3'),
    origin('center'),
    pos(width()/2, 48)
  ]);

  //add hand of cards left counter
  const cardsLeftText = add([
    text('cards left: ' + deck3.deckCards.length, {
      width: 128,
    }),
    scale(0.25),
    pos(0, 320),
    'cardsLeftText'
  ]);

  //player creation
  const player = add([
    pos(288+128, 192+64),
    origin('botleft'),
    sprite('playerSpritesheet', {
      frame: 7,
      flipX: false,
    }),
    scale(0.16),
    area({
      width: 32,
      height: 32,
    }),
    'player'
  ]);

  //enemy creation
  const enemy = add([
    sprite('fox'),
    origin('botleft'),
    scale(0.06),
    pos(352-160, 192),
    area({
      width: 32,
      height: 32,
    }),
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
      value: deck3.deckCards.pop(),
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
      value: deck3.deckCards.pop()
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
      value: deck3.deckCards.pop()
    }
  ]);

  cardController(player, deck3, card1Actual, card2Actual, card3Actual, card1ActualSprite, card2ActualSprite, card3ActualSprite);
  cardsLeftTextUpdate(cardsLeftText, deck3);
  registerPlayerCollisions(player, moveAmount, 'level4');

  action ('enemy', () => {
    if (turnStatus < 0) { //meaning it's enemy turn, doesn't run because turn status situaiton isnt checked every frame
      //enemy movement
      //enemy ai
      //want the enemy to follow a set path, then if the player is within a certain
      //number of blocks of them, it should go to them
      //checks to see if player is outside of 1 tile of enemy
      if (player.pos.x < enemy.pos.x - 32 || player.pos.x > enemy.pos.x + 32
        || player.pos.y < enemy.pos.y - 32 || player.pos.y > enemy.pos.y + 32) {
            enemy.moveBy(moveAmount, 0);
            changeTurn();
      }
      else {
        enemy.moveTo(player.pos.x, player.pos.y, ); //last arg is pixels per second
        changeTurn();
      }
    }
  });

  //enemy collisions
  collides('enemy', 'impassable-wall', () => {
    moveAmount = -moveAmount;
  });
});

go('level3');
