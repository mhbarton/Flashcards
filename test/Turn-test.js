const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card')
const Turn = require('../src/Turn');

describe('Turn', function(){

it('should be a function', function(){
  const turn1 = new Turn();

  expect(Turn).to.be.a('function');
})
it('should be an instance of Turn', function(){
  const turn2 = new Turn('', card);

  expect(turn2).to.be.an.instanceof(Turn);

})
it.skip('should return user\'s guess', function(){
  const turn3 = new Turn();

  expect(returnGuess()).to.equal('');
})


});
