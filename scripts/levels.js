import kaboom from "https://unpkg.com/kaboom@next/dist/kaboom.mjs";

const level1Map = [
  '                    ',
  '                    ',
  '                    ',
  '     ==========     ', //here
  '     ==========     ',
  '     ==========     ',
  '     ==========     ',
  '     ==========     ',
  '     ==========     ', //to here
  '                    ',
  '                    ',
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
}

export {level1Map, level1MapConfig}
