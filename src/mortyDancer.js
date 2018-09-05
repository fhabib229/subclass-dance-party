var MortyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class="morty" src="img/lawyermorty.gif">');
  this.tag = 'morty';
  this.styleSettings = {
    top: top,
    left: left
  };
  this.setPosition(top, left);
};

MortyDancer.prototype = Object.create(Dancer.prototype);
MortyDancer.prototype.constructor = MortyDancer;

MortyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.slideDown();
};

MortyDancer.prototype.lineUp = function(top, left) {
  this.styleSettings.top = top; //300
  this.styleSettings.left = left;
  this.$node.css(this.styleSettings);
};
