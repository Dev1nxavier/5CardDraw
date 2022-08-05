import CardHand from "../../Hand.js";
import Card from "../../Card.js";

describe('My poker tests', () => {
  it('Makes sure Cypress is working', () => {
    expect(true).to.equal(true)
  })

  const card = new Card("5 of Diamonds");
  it('Returns a card with value = 5', () => {
    expect(card.value).to.equal(5)
  })
  it('Returns a card with a suit of "Diamonds', () => {
    expect(card.suit).to.equal("Diamonds");
  })

})

describe('My computed hand tests', () => {

  it("Returns a hand with a straight to have a value = 'Straight'", () => {
    let newHand = [];
    const card1 = new Card("2 of Diamonds");
    const card2 = new Card("3 of Diamonds");
    const card3 = new Card("4 of Clubs");
    const card4 = new Card("5 of Spades");
    const card5 = new Card("6 of Hearts");

    newHand.push(card1);
    newHand.push(card2);
    newHand.push(card3);
    newHand.push(card4);
    newHand.push(card5);

    let hand = new CardHand(newHand);

    expect(hand.category()).to.equal("Straight");
  })

  it("Returns a hand with Royal Flush to have a value = 'Straight Flush'", () => {
    let newHand = [];
    const card1 = new Card("Ace of Spades");
    const card2 = new Card("Jack of Spades");
    const card3 = new Card("Queen of Spades");
    const card4 = new Card("King of Spades");
    const card5 = new Card("T of Spades");

    newHand.push(card1);
    newHand.push(card2);
    newHand.push(card3);
    newHand.push(card4);
    newHand.push(card5);

    let hand = new CardHand(newHand);

    expect(hand.category()).to.equal("Straight Flush");
  })

  it("Returns a hand with two pair to have a value = 'Two Pair'", () => {
    let newHand = [];
    const card1 = new Card("Ace of Spades");
    const card2 = new Card("Ace of Clubs");
    const card3 = new Card("T of Clubs");
    const card4 = new Card("T of Spades");
    const card5 = new Card("5 of Clubs");

    newHand.push(card1);
    newHand.push(card2);
    newHand.push(card3);
    newHand.push(card4);
    newHand.push(card5);

    let hand = new CardHand(newHand);

    expect(hand.category()).to.equal("Two Pair");
  })

})

describe('Unit tests for return category values', ()=>{
  it('Returns a hand with 1 pair to have a value = 3', () => {
    let hand = [];
    const c1 = new Card("2 of Diamonds");
    const c2 = new Card("3 of Diamonds");
    const c3 = new Card("4 of Clubs");
    const c4 = new Card("5 of Spades");
    const c5 = new Card("2 of Hearts");

    hand.push(c1);
    hand.push(c2);
    hand.push(c3);
    hand.push(c4);
    hand.push(c5);

    let myHand = new CardHand(hand);
    expect(myHand.matchPairs()).to.equal(3)
  })

  it("Returns a hand with 2 pairs to have a value = 4", () => {
    let newHand = [];
    const card1 = new Card("2 of Diamonds");
    const card2 = new Card("3 of Diamonds");
    const card3 = new Card("4 of Clubs");
    const card4 = new Card("4 of Spades");
    const card5 = new Card("2 of Hearts");

    newHand.push(card1);
    newHand.push(card2);
    newHand.push(card3);
    newHand.push(card4);
    newHand.push(card5);

    let hand = new CardHand(newHand);

    expect(hand.matchPairs()).to.equal(4);
  })

  it("Returns a hand with 3 of a kind to have a value = 5", () => {
    let newHand = [];
    const card1 = new Card("2 of Diamonds");
    const card2 = new Card("3 of Diamonds");
    const card3 = new Card("4 of Clubs");
    const card4 = new Card("2 of Spades");
    const card5 = new Card("2 of Hearts");

    newHand.push(card1);
    newHand.push(card2);
    newHand.push(card3);
    newHand.push(card4);
    newHand.push(card5);

    let hand = new CardHand(newHand);

    expect(hand.matchPairs()).to.equal(5);
  })

  it("Returns a hand with a full house to have a value = 9", () => {
    let newHand = [];
    const card1 = new Card("2 of Diamonds");
    const card2 = new Card("4 of Diamonds");
    const card3 = new Card("4 of Clubs");
    const card4 = new Card("2 of Spades");
    const card5 = new Card("2 of Hearts");

    newHand.push(card1);
    newHand.push(card2);
    newHand.push(card3);
    newHand.push(card4);
    newHand.push(card5);

    let hand = new CardHand(newHand);

    expect(hand.matchPairs()).to.equal(8);
  })

  it("Returns a hand with no pairs to have a value = 0", () => {
    let newHand = [];
    const card1 = new Card("2 of Diamonds");
    const card2 = new Card("3 of Diamonds");
    const card3 = new Card("4 of Clubs");
    const card4 = new Card("5 of Spades");
    const card5 = new Card("6 of Hearts");

    newHand.push(card1);
    newHand.push(card2);
    newHand.push(card3);
    newHand.push(card4);
    newHand.push(card5);

    let hand = new CardHand(newHand);

    expect(hand.matchPairs()).to.equal(0);
  })

  it("Returns a hand with all same suite to have a value = 7", () => {
    let newHand = [];
    const card1 = new Card("2 of Diamonds");
    const card2 = new Card("3 of Diamonds");
    const card3 = new Card("4 of Diamonds");
    const card4 = new Card("2 of Diamonds");
    const card5 = new Card("2 of Diamonds");

    newHand.push(card1);
    newHand.push(card2);
    newHand.push(card3);
    newHand.push(card4);
    newHand.push(card5);

    let hand = new CardHand(newHand);

    expect(hand.flush()).to.equal(7);
  })

  it("Returns a hand with 4 same suit to have a value = 0", () => {
    let newHand = [];
    const card1 = new Card("2 of Diamonds");
    const card2 = new Card("3 of Diamonds");
    const card3 = new Card("4 of Diamonds");
    const card4 = new Card("2 of Diamonds");
    const card5 = new Card("2 of Hearts");

    newHand.push(card1);
    newHand.push(card2);
    newHand.push(card3);
    newHand.push(card4);
    newHand.push(card5);

    let hand = new CardHand(newHand);

    expect(hand.flush()).to.equal(0);
  })

  it("Returns a hand with straight flush to have a value = 10", () => {
    let newHand = [];
    const card1 = new Card("2 of Spades");
    const card2 = new Card("3 of Spades");
    const card3 = new Card("4 of Spades");
    const card4 = new Card("5 of Spades");
    const card5 = new Card("6 of Spades");

    newHand.push(card1);
    newHand.push(card2);
    newHand.push(card3);
    newHand.push(card4);
    newHand.push(card5);

    let hand = new CardHand(newHand);

    expect(hand.flush()).to.equal(10);
  })

  it("Returns a hand with a straight to have a value = 6", () => {
    let newHand = [];
    const card1 = new Card("2 of Diamonds");
    const card2 = new Card("3 of Diamonds");
    const card3 = new Card("4 of Clubs");
    const card4 = new Card("5 of Spades");
    const card5 = new Card("6 of Hearts");

    newHand.push(card1);
    newHand.push(card2);
    newHand.push(card3);
    newHand.push(card4);
    newHand.push(card5);

    let hand = new CardHand(newHand);

    expect(hand.straight()).to.equal(6);
  })

  it("Returns a hand with a Ace straight to have a value = 6", () => {
    let newHand = [];
    const card1 = new Card("2 of Diamonds");
    const card2 = new Card("3 of Diamonds");
    const card3 = new Card("4 of Clubs");
    const card4 = new Card("5 of Spades");
    const card5 = new Card("Ace of Hearts");

    newHand.push(card1);
    newHand.push(card2);
    newHand.push(card3);
    newHand.push(card4);
    newHand.push(card5);

    let hand = new CardHand(newHand);

    expect(hand.straight()).to.equal(6);
  })
})
  

