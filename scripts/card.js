import kaboom from "https://unpkg.com/kaboom@next/dist/kaboom.mjs";

//template for cards
export default class Card {
  constructor(tempX, tempY, tempCardValue, tempCardSprite){ //add args to constructor to pass values in when instantiating
    //like object setup
    //card position
    this.xPos = tempX; //this is reference to current object instance
    this.yPos = tempY;
    //card value
    this.cardValue = tempCardValue;
    //card sprite?
    this.cardSprite = tempCardSprite;
  }
  //this is where we put methods?
  //execute action method, based on value of cards
  executeCardAction() {
    switch (this.cardValue) {
      case 'up':
          return vec2(0, -32);
        break;
      case 'down':
          return vec2(0, 32);
        break;
      case 'left':
          return vec2(-32, 0);
        break;
      case 'right':
          return vec2(32, 0);
        break;
      default:

    }
  }
}
