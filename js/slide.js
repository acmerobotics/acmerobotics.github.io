function SlideShow(el, imgList, timeGap) {
  var this_ = this;
  this.el = el;
  this.imgList = imgList;
  this.current = 0;
  this.timeGap = timeGap || 0;

  // element properties
  if (el.className.indexOf("slideshow") == -1) {
    el.className = el.className + " slideshow";
  }

  // button divs
  this.left = document.createElement("div");
  this.left.className = "left shape";
  this.right = document.createElement("div");
  this.right.className = "right shape";

  // button listeners
  this.left.addEventListener("click", function() {
    this_.slideLeft();
  });
  this.right.addEventListener("click", function() {
    this_.slideRight();
  });

  // image
  this.image = new Image();

  // add everything
  this.el.appendChild(this.left);
  this.el.appendChild(this.image);
  this.el.appendChild(this.right);

  this.update();

  this.resetCycle();
}
SlideShow.prototype.resetCycle = function() {
  if (this.hasOwnProperty("id")) {
    clearInterval(this.id);
  }
  this.id = setInterval(this.cycle.bind(this), this.timeGap);
};
SlideShow.prototype.cycle = function() {
  this.slideRight();
};
SlideShow.prototype.update = function() {
  var this_ = this;
  var name = this.imgList[this.current];
  this.image.src = name;
  setTimeout(function() {
    var height = this_.image.clientHeight + "px";
    this_.left.style.height = height;
    this_.right.style.height = height;
  }, 100);
};
SlideShow.prototype.slideRight = function() {
  this.current = (this.current + 1) % this.imgList.length;
  this.update();
  this.resetCycle();
};
SlideShow.prototype.slideLeft = function() {
  this.current = (this.current + this.imgList.length - 1) % this.imgList.length;
  this.update();
  this.resetCycle();
};
