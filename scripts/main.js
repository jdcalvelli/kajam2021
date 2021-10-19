import kaboom from "https://unpkg.com/kaboom@next/dist/kaboom.mjs";

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
});

go('main');
