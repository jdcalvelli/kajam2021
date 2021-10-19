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
}
