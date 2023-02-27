class GuessingGame {
  constructor() {}

  setRange(min, max) {
    this.min = min;
    this.max = max;
    this.count = 0;
    console.log(this);
  }

  guess() {
    this.result = Math.round((this.max - this.min) / 2 + this.min);
    this.count++;
    console.log(this.count, 'result = ', this.result);
    return this.result;
  }

  lower() {
    this.max = this.result;
    console.log('lower, max = ', this.max);
  }

  greater() {
    this.min = this.result;
    console.log('greater, min = ', this.min);
  }
}

module.exports = GuessingGame;
