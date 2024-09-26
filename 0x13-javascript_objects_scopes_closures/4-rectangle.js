class Rectangle {
  constructor(w, h) {
    if (this.isValid(w) && this.isValid(h)) {
      this.width = w;
      this.height = h;
    }
  }

  isValid(value) {
    return Number.isInteger(value) && value > 0;
  }

  print() {
    if (this.width && this.height) {
      for (let i = 0; i < this.height; i++) {
        console.log("X".repeat(this.width));
      }
    }
  }

  rotate() {
    if (this.width && this.height) {
      [this.width, this.height] = [this.height, this.width];
    }
  }

  double() {
    if (this.width && this.height) {
      this.width *= 2;
      this.height *= 2;
    }
  }
}

module.exports = Rectangle;
