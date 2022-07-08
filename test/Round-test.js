const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', function(){
  let deck;
  let round;
  let turn;
  let card1;
  let card2;
  let card3;
  let card4;

  beforeEach(function(){
    card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    card3 = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");
    card4 = new Card(4, "What type of prototype method does not modify the existing array but returns a particular representation of the array?", ["mutator method", "accessor method", "iteration method"], "accessor method");

    deck = new Deck([card1, card2, card3, card4]);
    round = new Round(deck)
    // turn = new Turn('guess', card1)
  });

it('should be a function', function(){

  expect(Round).to.be.a('function');
});

it('should be an instance of Round', function(){

  expect(round).to.be.an.instanceOf(Round);
});

it('should return the current card being played', function(){
  round.returnCurrentCard()

  expect(round.currentCard).to.equal(card1);
})

it('should let the player take a turn and increment those turns', function(){
  round.takeTurns()

  expect(round.turns).to.equal(1);
})

it('should start with no incorrect guesses', function(){

  expect(round.incorrectGuesses).to.deep.equal([]);
})

it('should be able to store the incorrect guesses', function(){
  round.takeTurns('function')
  round.takeTurns('array')
  round.takeTurns('iteration method')
  round.takeTurns('mutator method')

  expect(round.incorrectGuesses).to.deep.equal([1, 3, 4])

})

it('should give the user feedback on correct or incorrect answers', function(){

  expect(round.takeTurns('function')).to.equal('incorrect 😢');
  expect(round.takeTurns('array')).to.equal('correct! 🥳');
});

it('should calculate and return the percentage of correct guesses', function(){
  round.takeTurns('function');
  round.takeTurns('array');
  round.takeTurns('iteration method');
  round.takeTurns('mutator method');

  round.calculatePercentCorrect();

  expect(round.calculatePercentCorrect()).to.equal(25);
})


it('should end the user\'s round', function(){
  round.takeTurns('function');
  round.takeTurns('array');
  round.takeTurns('iteration method');
  round.takeTurns('mutator method');
  round.endRound();

  expect(round.endRound()).to.equal(`** The round is over! ** You have answered ${25}% of the questions correctly!`)
})
});



// takeTurn: method that updates turns count, evaluates guesses, gives feedback, and stores ids of incorrect guesses

// When a guess is made, a new Turn instance is created.
// The turns count is updated, regardless of whether the guess is correct or incorrect
// The next card becomes current card
// Guess is evaluated/recorded. Incorrect guesses will be stored (via the id) in an array of incorrectGuesses
// Feedback is returned regarding whether the guess is incorrect or correct
// calculatePercentCorrect: method that calculates and returns the percentage of correct guesses
// endRound: method that prints the following to the console: ‘** Round over! ** You answered <>% of the questions correctly!’
