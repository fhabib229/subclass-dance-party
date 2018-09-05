var pogDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class="poggers" src="img/pogchamp.jpg">');
  this.styleSettings = {
    top: top,
    left: left
  };
  this.setPosition(top, left);
};

pogDancer.prototype = Object.create(Dancer.prototype);
pogDancer.prototype.constructor = pogDancer;

pogDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  //this.$node.slideDown();
};

pogDancer.prototype.lineUp = function(top, left) {
  this.styleSettings.top = 300;
  this.styleSettings.left = left;
  this.$node.css(this.styleSettings);
};
