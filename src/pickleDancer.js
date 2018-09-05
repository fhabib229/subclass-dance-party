var DancingPickle = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class="pickle" src="img/dancingpicklerick.gif">');
  this.tag = 'rick';
  this.styleSettings = {
    top: top,
    left: left
  };
  this.setPosition(top, left);

};

DancingPickle.prototype = Object.create(Dancer.prototype);
DancingPickle.prototype.constructor = DancingPickle;

DancingPickle.prototype.step = function () {
  Dancer.prototype.step.call(this);
  this.$node.slideUp();
};

DancingPickle.prototype.lineUp = function(top, left) {
  this.styleSettings.top = top; // 500
  this.styleSettings.left = left;
  this.$node.css(this.styleSettings);
};

