import kaboom from "https://unpkg.com/kaboom@next/dist/kaboom.mjs";

const level1Map = [
  '                    ', //top ui area
  '                    ',
  '     **********     ',
  '    *==========*    ', //level area here
  '    *==========*    ',
  '    *==========*    ',
  '    *==========*    ',
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
    sprite('holdoverTile'),
  ],
  '*': () => [
    'impassable-wall'
  ],
}

export {level1Map, level1MapConfig}
