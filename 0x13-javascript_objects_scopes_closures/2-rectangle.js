class Rectangle {
  constructor(w, h) {
    if (this.isValid(w) && this.isValid(h)) {
      this.width = w;
      this.height = h;
    } else {
      return {};
    }
  }

  isValid(value) {
    return Number.isInteger(value) && value > 0;
  }
}

module.exports = Rectangle;
