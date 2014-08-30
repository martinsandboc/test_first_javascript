function Calculator () {
  this.total = [0];

}

Calculator.prototype = {
  value: function() {
    return this.total[(this.total.length -1)];
  },
  push: function(num) {
    this.total.push(num);
  },
  add: function(num) {
    this.push(num);
    this.plus();
  },
  subtract: function(num) {
    this.push(num);
    this.minus();
  },
  minus: function() {
    var value = this.popWithCheck();
    this.push(this.popWithCheck() - value);
  },
  plus: function() {
    this.push(this.popWithCheck() + this.popWithCheck());
  },
  times: function() {
    this.push(this.popWithCheck() * this.popWithCheck());
  },
  divide: function() {
    var value = this.popWithCheck();
    this.push(this.popWithCheck() / (value));
  },
  popWithCheck: function() {
    if (this.total == 0) {
      throw "calculator is empty";
    }
    return this.total.pop();
  }
}
  
