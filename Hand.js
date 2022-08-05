class CardHand {
    constructor(hand) {
        //calculates value of hand;
        this.hand = hand.sort(function (a, b) { return a.value - b.value });
        this.length = Object.entries(hand).length;
        this.category(); // https://en.wikipedia.org/wiki/List_of_poker_hands
    }

    /*
    category rankings:
    10:Straight flush
    9: Four of a kind
    8: Full house
    7: flush
    6: Straight
    5: Three of a kind
    4: Two pair
    3: One pair
    2: High card
    */

    category() {
        // for each possible hand, set value of category based on 5-card monty rules

        const whatIsHand = { 10: "Straight Flush", 9: "Four of a Kind", 8: "Full House", 7: "Flush", 6: "Straight", 5: "Three of a kind", 4: "Two Pair", 3: "One pair", 2: "High Card" };

        let category = Math.max(this.matchPairs(), this.straight(), this.flush(), 2);

        // return category;
        return whatIsHand[category];
    }

    matchPairs() {
        //check for matching values
        let match = {};

        for (const card of this.hand) {
            match[card.value] = (match[card.value] || 0) + 1;
        }

        let countMatches = 0;
        let freqSize = Object.entries(match).length;

        //iterate over match Object
        for (const key in match) {
            //return value * frequency of >=2 matches
            if (match[key] > 1) {
                countMatches++;
            }
        }
        //if no pairs, exit
        if (countMatches === 0) return 0;

        //if count>=2, check for full house 
        if (countMatches > 1) {
            if (freqSize == 3) {
                //2 pair
                return 4;
            }
            //full house
            return 8;
        }

        if (freqSize == 4) {
            //one pair
            return 3;
        } else if (freqSize == 3) {
            //3 of a kind
            return 5;
        } else {
            //four of a kind
            return 9;
        }
    }


    //check for matching suits
    flush() {
        //check if all same suit
        for (const [i, card] of this.hand.entries()) {
            if (card.suit !== this.hand[0].suit) {
                return 0
            };
        }

        //rank flush by highest to lowest card
        let tempVal = 0;
        for (const card in this.hand) {
            tempVal += card.value;
        }

        //check if this is a straight flush
        if (this.straight() > 0) {
            return 10; //this is the best hand possible
        } else {
            return 7;
        }
    }

    //check for straights
    straight() {

        let first = 0;
        let hand = this.hand.map((card,i)=>card.value);

        //Edge case: A->5
        if(hand[this.length-1] == 14 && hand[0] == 2){
            hand[this.length-1] = 1;

            //resort hand
            hand.sort((a,b)=>a-b);
        }
        
        first = hand[0];

        const isStraight = hand.every((card, i) => {
            return card - first === i;
        })

        if (isStraight) {
            return 6;
        }
        return 0;
    }

    highCard() {
        //check for high card   

        console.log("Category:", this.category);

        let tempVal = -1;

        for (const card in this.hand) {
            tempVal = Math.max(tempVal, +this.hand[card].value);
        }
        //return highest card in hand
        return tempVal;
    }
}

export default CardHand;