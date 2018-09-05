describe('MortyDancer', function() {

  var mortyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    mortyDancer = new MortyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(mortyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(mortyDancer.$node, 'toggle');
    mortyDancer.step();
    expect(mortyDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(mortyDancer, 'step');
      expect(mortyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(mortyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(mortyDancer.step.callCount).to.be.equal(2);
    });
  });
});
