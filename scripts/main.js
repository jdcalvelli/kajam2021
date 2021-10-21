import kaboom from "https://unpkg.com/kaboom@next/dist/kaboom.mjs";
import Card from "./card.js";
import Deck from "./deck.js";

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

scene('main', ()=> {

  //level text basic
  add([
    text('level = 1'),
  ]);

  //player creation
  const player = add([
    origin('center'),
    pos(width()/2, height()/2),
    rect(32, 32)
  ]);

  //card instantiation test
  //let card1 = new Card(124, 124, 'right', null);
  //let card2 = new Card(124, 248, 'left', null);

  // const card1Actual = add([
  //   rect(64, 124),
  //   text('move right'),
  //   scale(0.5),
  //   pos(card1.xPos, card1.yPos),
  //   area(),
  //   'card1Actual'
  // ]);
  //
  // const card2Actual = add([
  //   rect(64, 124),
  //   text('move left'),
  //   scale(0.5),
  //   pos(card2.xPos, card2.yPos),
  //   area(),
  //   'card2Actual'
  // ]);

  //moves right with some speed value i dont yet understand
  //DOESNT WORK WITHOUT COLLIDER

  //clicks('card1Actual', ()=> player.move(card1.executeCardAction()));
  //clicks('card2Actual', ()=> player.move(card2.executeCardAction()));

  const deck1 = new Deck;
  deck1.instantiateDeckCards();

  console.log(deck1.deckCards);

  //we want to display 3 cards at a time, pulled from the top of the deck
  //when a cardActual is used, we want to execute the card action and destroy
  //the cardActual, and pop it from the array

  let card1ActualSprite = deck1.deckCards[deck1.deckCards.length - 1].cardSprite;
  let card2ActualSprite = deck1.deckCards[deck1.deckCards.length - 2].cardSprite;
  let card3ActualSprite = deck1.deckCards[deck1.deckCards.length - 3].cardSprite;

  //because the object has been initialized already, when we change the
  //value of the variable, it doesnt change anything dynamically
  const card1Actual = add([
    rect(96, 160),
    pos(128, 288),
    sprite(card1ActualSprite),
    area(),
    'card1Actual',
    {
      value: deck1.deckCards.pop(),
    }
  ]);
  //deck1.deckCards[0]

  const card2Actual = add([
    rect(96, 160),
    pos(256, 288),
    sprite(card2ActualSprite),
    area(),
    'card2Actual',
    {
      value: deck1.deckCards.pop()
    }
  ]);
  //deck1.deckCards[1]

  const card3Actual = add([
    rect(96, 160),
    pos(384, 288),
    sprite(card3ActualSprite),
    area(),
    'card3Actual',
    {
      value: deck1.deckCards.pop()
    }
  ]);
  //deck1.deckCards[2]

  //console.log(card1Actual.value);
  //console.log(card2Actual.value);
  //console.log(card3Actual.value);

  clicks('card1Actual', ()=> {
      player.move(card1Actual.value.executeCardAction());
      card1Actual.value = deck1.deckCards.pop();
      card1ActualSprite = card1Actual.value.cardSprite;
      card1Actual.use(sprite(card1ActualSprite)); //adds or override existing component
  });
  clicks('card2Actual', ()=> {
    player.move(card2Actual.value.executeCardAction());
    card2Actual.value = deck1.deckCards.pop();
    card2ActualSprite = card2Actual.value.cardSprite;
    card2Actual.use(sprite(card2ActualSprite));
  });
  clicks('card3Actual', ()=> {
    player.move(card3Actual.value.executeCardAction());
    card3Actual.value = deck1.deckCards.pop();
    card3ActualSprite = card3Actual.value.cardSprite;
    card3Actual.use(sprite(card3ActualSprite));
  });
  //write a function in action that checks if a card has been pressed and then
  //pops the value of that card from the array and moves the corresponding values
  //up

});

go('main');
