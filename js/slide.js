function SlideShow(el, imgList) {
  var this_ = this;
  this.el = el;
  this.imgList = imgList;
  this.current = 0;

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

  setInterval(function() {
    this_.slideRight();
  }, 5000);
}
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
};
SlideShow.prototype.slideLeft = function() {
  this.current = (this.current + this.imgList.length - 1) % this.imgList.length;
  this.update();
};
