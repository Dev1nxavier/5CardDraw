//create a shuffled deck of cards
class Deck {
    constructor() {
        this.deck = []; //52 cards
        this.initDeck(); //initialize the playing cards
        this.shuffle(); //randomized deck
    }

    
    initDeck(){
    //create a deck of 52 playing cards
    const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];

    const values = ['Ace',2,3,4,5,6,7,8,9,'T','J','Q','K'];

        //Create cards and add to deck array
    for(const val of values){
        for(const suit of suits){
            this.deck.push(val+" of "+suit);
        }
    }
    }
    
    shuffle(){
        //randomize cards in deck
        console.log("Shuffling...");
        //loop through deck
        let length = this.deck.length;

        //select random card in deck;
        let tempCard=null;
        for(const [i, card] of this.deck.entries()){
            let randPos = Math.floor(Math.random()*this.deck.length) //random card in deck
            tempCard = this.deck[i]; //exchange tempCard with card @ i
            //put random position card at this location
            this.deck[i] = this.deck[randPos];
            this.deck[randPos] = tempCard//swap card @ j for temp card
            
        }

    }

    dealCard(){
        //deal from top
       if(this.deck.length<2){
        console.log("Reshuffling...")
        this.initDeck();
        this.shuffle();
       }

       return this.deck.pop();
    }

}

export {Deck};