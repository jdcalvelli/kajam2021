import kaboom from "https://unpkg.com/kaboom@next/dist/kaboom.mjs";

const level0Map = [
  '                    ', //top ui area
  '                    ',
  '                    ',
  '     **********      ', //level area here
  '    *1++++++++2*    ',
  '    *|.......&!*    ',
  '    *3--------4*    ',
  '     **********     ',
  '                    ', //to here
  '                    ',
  '                    ', //card area below here
  '                    ',
  '                    ',
  '                    ',
  '                    ',
]

const level1Map = [
  '                    ', //top ui area
  '                    ',
  '     **********     ',
  '    *1++++++++2*    ', //level area here
  '    *|........!*    ',
  '    *3----....!*    ',
  '         *|...!*    ',
  '         *|..&!*    ',
  '         *3---4*    ', //to here
  '          *****     ',
  '                    ', //card area below here
  '                    ',
  '                    ',
  '                    ',
  '                    ',
]

const TEMPLATE = [
  '                    ', //top ui area
  '                    ',
  '     **********     ',
  '    *1++++++++2*    ', //level area here
  '    *|........!*    ',
  '    *|........!*    ',
  '    *&........!*    ',
  '    *|........!*    ',
  '    *3--------4*    ', //to here
  '     **********     ',
  '                    ', //card area below here
  '                    ',
  '                    ',
  '                    ',
  '                    ',
]


//this can probably be generalized beyond just level1 bc all levels
//will use the same config for ascii to sprite
const levelMapConfig = {
  width: 32,
  height: 32,
  '.': () => [
    sprite('tileset', {
      frame: 2,
    }),
    scale(0.16) //not sure why this scale works but it looks the best rn
  ],
  '+': () => [
    sprite('tileset', {
      frame: 6,
    }),
    scale(0.16) //not sure why this scale works but it looks the best rn
  ],
  '-': () => [
    sprite('tileset', {
      frame: 9,
    }),
    scale(0.16) //not sure why this scale works but it looks the best rn
  ],
  '|': () => [
    sprite('tileset', {
      frame: 10,
    }),
    scale(0.16) //not sure why this scale works but it looks the best rn
  ],
  '!': () => [
    sprite('tileset', {
      frame: 7,
    }),
    scale(0.16) //not sure why this scale works but it looks the best rn
  ],
  '1': () => [
    sprite('tileset', {
      frame: 0,
    }),
    scale(0.16) //not sure why this scale works but it looks the best rn
  ],
  '2': () => [
    sprite('tileset', {
      frame: 1,
    }),
    scale(0.16) //not sure why this scale works but it looks the best rn
  ],
  '3': () => [
    sprite('tileset', {
      frame: 3,
    }),
    scale(0.16) //not sure why this scale works but it looks the best rn
  ],
  '4': () => [
    sprite('tileset', {
      frame: 4,
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
    sprite('checkeredFlag'),
    area({
      width: 32,
      height: 32,
    }),
    'end-flag'
  ]
}

export {level0Map, level1Map, levelMapConfig}
