class Rectangle {
  constructor (w, h) {
    if (this.isValid(w) && this.isValid(h)) {
      this.width = w;
      this.height = h;
    }
  }

  isValid (value) {
    return Number.isInteger(value) && value > 0;
  }

  print () {
    if (this.width && this.height) {
      for (let i = 0; i < this.height; i++) {
        console.log("X".repeat(this.width));
      }
    }
  }
}

module.exports = Rectangle;
