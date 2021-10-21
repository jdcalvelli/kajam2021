import kaboom from "https://unpkg.com/kaboom@next/dist/kaboom.mjs";
import Card from "./card.js";
import Deck from "./deck.js";

//creating basic kaboom instance
kaboom({
  width: 640,
  height: 480,
})

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

  const card1Actual = add([
    rect(96, 160),
    pos(128, 288),
    color(255, 0, 0),
    area(),
    'card1Actual',
    {
      value: deck1.deckCards.pop()
    }
  ]);
  //deck1.deckCards[0]

  const card2Actual = add([
    rect(96, 160),
    pos(256, 288),
    color(0, 255, 0),
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
    color(0, 0, 255),
    area(),
    'card3Actual',
    {
      value: deck1.deckCards.pop()
    }
  ]);
  //deck1.deckCards[2]

  console.log(card1Actual.value);
  console.log(card2Actual.value);
  console.log(card3Actual.value);

  clicks('card1Actual', ()=> {
      player.move(card1Actual.value.executeCardAction());
      card1Actual.value = deck1.deckCards.pop();
  });
  clicks('card2Actual', ()=> {
    player.move(card2Actual.value.executeCardAction());
    card2Actual.value = deck1.deckCards.pop();
  });
  clicks('card3Actual', ()=> {
    player.move(card3Actual.value.executeCardAction());
    card2Actual.value = deck1.deckCards.pop();
  });
  //write a function in action that checks if a card has been pressed and then
  //pops the value of that card from the array and moves the corresponding values
  //up

});

go('main');
