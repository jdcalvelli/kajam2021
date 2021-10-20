import kaboom from "https://unpkg.com/kaboom@next/dist/kaboom.mjs";
import Card from "./card.js";

export default class Deck {
  //deck will have an array of cards, deck will have a method to instantiate
  //cards, deck will have a method to randomize the instantiated card order

  constructor() {
    this.deckCards = [];
  }

  instantiateDeckCards() {
    for (let i = 0; i < this.deckCards.length; i++) {
      switch (randi(1, 4)) {
        case 1:
          this.deckCards[i] = new Card(null, null, 'up', null);
          break;
        case 2:
          this.deckCards[i] = new Card(null, null, 'down', null);
          break;
        case 3:
          this.deckCards[i] = new Card(null, null, 'left', null);
          break;
        case 4:
          this.deckCards[i] = new Card(null, null, 'right', null);
          break;
        default:
      }
    }
  }

}
