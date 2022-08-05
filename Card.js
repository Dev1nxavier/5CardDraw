//create individual cards
class Card {
    constructor(card) {
        this.card = card;
        this.cardValue(); //calculate value of card
        this.suit();//suit of card;
    }

    suit(){
        //return suit of card
        return this.suit = this.card.substring(this.card.indexOf("of")+3);
        
    }
    
    cardValue(){
         //define array of points for card values
    const pointsObj = {"2":2, "3":3, "4":4, "5":5, "6":6, "7":7, "8":8, "9":9, "T":10, "J": 11, "Q":12, "K":13, "A":14};
        
        //get card value from substring
        const cardValString = this.card.substring(0,1);
        
        //return value from dictionary
        this.value = pointsObj[cardValString];

        //return value;
        return this.value;
    }
    
}

export default Card;