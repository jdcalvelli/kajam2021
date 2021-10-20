import kaboom from "https://unpkg.com/kaboom@next/dist/kaboom.mjs";
import Card from "./card.js";

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
  let card1 = new Card(124, 124, 'right', null);
  let card2 = new Card(124, 248, 'left', null);

  const card1Actual = add([
    rect(64, 124),
    text('move right'),
    scale(0.5),
    pos(card1.xPos, card1.yPos),
    area(),
    'card1Actual'
  ]);

  const card2Actual = add([
    rect(64, 124),
    text('move left'),
    scale(0.5),
    pos(card2.xPos, card2.yPos),
    area(),
    'card2Actual'
  ]);

  //moves right with some speed value i dont yet understand
  //DOESNT WORK WITHOUT COLLIDER

  clicks('card1Actual', ()=> player.move(card1.executeCardAction()));
  clicks('card2Actual', ()=> player.move(card2.executeCardAction()));





});

go('main');
