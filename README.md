# 5CardDraw
Creates and shuffles a standard deck of 52 playing cards and deals 5 cards to the player along with computed value of the hand.

## Summary
The program creates a standard deck of 52 playing cards. The deck is shuffled and 5 cards are dealt to the player. The player's hand displaying the card description, face value, and suit are printed to the console. The hand's category is computed according to : https://en.wikipedia.org/wiki/List_of_poker_hands and printed to the console.
        
## category rankings:
    10:Straight flush
    9: Four of a kind
    8: Full house
    7: flush
    6: Straight
    5: Three of a kind
    4: Two pair
    3: One pair
    2: High card   

## Assumptions
- The program assumes Ace can be either a 1 (lowest card) or 14 (highest card).
- A standard set of 4 suits and card values of 2,3,4,5,6,7,8,9,T,J,Q,K,A was used. Cards are assigned values equal to their face value (if an integer) or 11,12,13,14 for J,Q,K,A respectively.    

## Initiating the Program  
1. npm i
2. In the console type: node index.js or npm start;

## Testing  
Unit tests are written with Cypress.io. The program is distributed with a series of tests which include:
1. Test to return "Straight Flush" for a hand of Ace-Spades, King-Spades, Queen-Spades, Jack-Spaces, Ten-Spades
2. Test to return "Straight" for a hand of 2,3,4,5,6 of differing suits
3. Test to return "Four of a Kind" for a hand of 4x Aces

### Initializing Tests
1. npm cypress: open or npx cypress open
2. On Cypress Launchpad choose E2E testing
3. Launch in Chrome.
