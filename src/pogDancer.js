var pogDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class="poggers" src="img/pogchamp.jpg" height="42">');
};

pogDancer.prototype = Object.create(Dancer.prototype);
pogDancer.prototype.constructor = pogDancer;

pogDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};