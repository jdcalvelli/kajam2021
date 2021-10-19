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
  let card1 = new Card(124, 124, 'test', null);

  const card1Actual = add([
    rect(64, 124),
    pos(card1.xPos, card1.yPos),
  ]);
});

go('main');
