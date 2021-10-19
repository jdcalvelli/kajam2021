import kaboom from "https://unpkg.com/kaboom@next/dist/kaboom.mjs";

//creating basic kaboom instance
kaboom({
  width: 640,
  height: 480,
})

add([
  text('hello world'),
]);
