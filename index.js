//create a program that deals 5 randomized playing cards (a "hand") and
//returns the hands computed value.

import { Deck } from "./Deck.js";
import Card from "./Card.js";
import CardHand from "./Hand.js";


function start() {
    //Create a randomized deck of standard playing cards
    const deck = new Deck()

    const hand = []; //array of cards as string
    //deal 5 cards to player;
    for (let index = 0; index < 5; index++) {
        const c1 = new Card(deck.dealCard());

        hand.push(c1);
    }


    let myHand = new CardHand(hand);
    console.log("My Hand:", myHand.hand, "has (a)",myHand.category());
}

start();
