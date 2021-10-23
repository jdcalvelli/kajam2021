import kaboom from "https://unpkg.com/kaboom@next/dist/kaboom.mjs";
import Card from "./card.js";

export default class Deck {
  //deck will have an array of cards, deck will have a method to instantiate
  //cards, deck will have a method to randomize the instantiated card order

  constructor() {
    this.deckCards = new Array(52);
  }


  //method instantiate a set number of each card
  instantiateDeckCards() {
    //each card should appear an equal number of times
    // divide total array length by number of cards
    for (let i = 0; i < this.deckCards.length / 4; i++) {
      this.deckCards[i] = new Card(null, null, 'up', 'upSprite');
    }
    for (let i = this.deckCards.length / 4; i < (this.deckCards.length / 4) * 2; i++) {
      this.deckCards[i] = new Card(null, null, 'down', 'downSprite');
    }
    for (let i = (this.deckCards.length / 4) * 2; i < (this.deckCards.length / 4) * 3; i++) {
      this.deckCards[i] = new Card(null, null, 'left', 'leftSprite');
    }
    for (let i = (this.deckCards.length / 4) * 3; i < (this.deckCards.length / 4) * 4; i++) {
      this.deckCards[i] = new Card(null, null, 'right', 'rightSprite');
    }
  }
}
