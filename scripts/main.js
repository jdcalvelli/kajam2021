import kaboom from "https://unpkg.com/kaboom@next/dist/kaboom.mjs";

import Card from "./card.js";
import Deck from "./deck.js";
import drawline from "./drawline.js";

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

//loading in tiles for use in levels.js
loadSprite('holdoverTile', './assets/holdoverTile.png');

scene('main', ()=> {

  //add level
  addLevel(level1Map, level1MapConfig);

  //level text basic
  add([
    text('level = 1'),
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

  //enemy ai
  //want the enemy to follow a set path, then if the player is within a certain
  //number of blocks of them, it should go to them
  let moveAmount = 1;
  action('enemy', () => {
    enemy.moveBy(0, moveAmount);
  });
  collides('enemy', 'impassable-wall', () => {
    moveAmount = -moveAmount;
  });

  //game logic
  //player collision
  collides('player', 'enemy', () => {
    destroy(player);
  });
  collides('player', 'impassable-wall', () => {
    console.log('collide w wall');
    destroy(player);
  });

  //deck initialization
  const deck1 = new Deck;
  deck1.instantiateDeckCards();

  //setting initial card sprites
  let card1ActualSprite = deck1.deckCards[deck1.deckCards.length - 1].cardSprite;
  let card2ActualSprite = deck1.deckCards[deck1.deckCards.length - 2].cardSprite;
  let card3ActualSprite = deck1.deckCards[deck1.deckCards.length - 3].cardSprite;

  //drawing card game objects
  const card1Actual = add([
    rect(96, 160),
    pos(128, 320),
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
    sprite(card2ActualSprite),
    area(),
    'card2Actual',
    {
      value: deck1.deckCards.pop()
    }
  ]);

  const card3Actual = add([
    rect(96, 160),
    pos(384, 320),
    sprite(card3ActualSprite),
    area(),
    'card3Actual',
    {
      value: deck1.deckCards.pop()
    }
  ]);

  //on click for each card, execute card action, update card value, update card sprite
  clicks('card1Actual', ()=> {
    player.moveBy(card1Actual.value.executeCardAction());
    card1Actual.value = deck1.deckCards.pop();
    card1ActualSprite = card1Actual.value.cardSprite;
    card1Actual.use(sprite(card1ActualSprite)); //adds or override existing component
  });
  clicks('card2Actual', ()=> {
    player.moveBy(card2Actual.value.executeCardAction());
    card2Actual.value = deck1.deckCards.pop();
    card2ActualSprite = card2Actual.value.cardSprite;
    card2Actual.use(sprite(card2ActualSprite));
  });
  clicks('card3Actual', ()=> {
    player.moveBy(card3Actual.value.executeCardAction());
    card3Actual.value = deck1.deckCards.pop();
    card3ActualSprite = card3Actual.value.cardSprite;
    card3Actual.use(sprite(card3ActualSprite));
  });

});

go('main');
