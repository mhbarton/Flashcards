const chai = require('chai');
const expect = chai.expect;

const data = require('../src/data');
const prototypeQuestions = data.prototypeData;
const util = require('../src/util');

const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Game = require('../src/Game');

describe('Game', function(){
  let game = new Game();

it('should be a function', function(){
  expect(Game).to.be.a('function');
});

it('should be an instance of Game', function(){
  expect(game).to.be.an.instanceOf(Game);
})
});
