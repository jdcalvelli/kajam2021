import kaboom from "https://unpkg.com/kaboom@next/dist/kaboom.mjs";
import Card from "./card.js";

export default class Deck {
  //deck will have an array of cards, deck will have a method to instantiate
  //cards, deck will have a method to randomize the instantiated card order

  constructor() {
    this.deckCards = new Array(52);
  }

  instantiateDeckCards() {
    for (let i = 0; i < this.deckCards.length; i++) {
      switch (randi(1, 4)) {
        case 1:
          this.deckCards[i] = new Card(null, null, 'up', 'upSprite');
          break;
        case 2:
          this.deckCards[i] = new Card(null, null, 'down', 'downSprite');
          break;
        case 3:
          this.deckCards[i] = new Card(null, null, 'left', 'leftSprite');
          break;
        case 4:
          this.deckCards[i] = new Card(null, null, 'right', 'rightSprite');
          break;
        default:
      }
    }
  }

}
