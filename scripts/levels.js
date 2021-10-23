import kaboom from "https://unpkg.com/kaboom@next/dist/kaboom.mjs";

const level1Map = [
  '                    ', //top ui area
  '                    ',
  '     **********     ',
  '    *==========*    ', //level area here
  '    *==========*    ',
  '    *==========*    ',
  '    *&=========*    ',
  '    *==========*    ',
  '    *==========*    ', //to here
  '     **********     ',
  '                    ', //card area below here
  '                    ',
  '                    ',
  '                    ',
  '                    ',
]

const level1MapConfig = {
  width: 32,
  height: 32,
  '=': () => [
    sprite('tileset', {
      frame: 6,
    }),
    scale(0.16) //not sure why this scale works but it looks the best rn
  ],
  '*': () => [
    area({
      width: 32,
      height: 32,
    }),
    'impassable-wall'
  ],
  '&': () => [
    area({
      width: 32,
      height: 32,
    }),
    'end-flag'
  ],
}

export {level1Map, level1MapConfig}
