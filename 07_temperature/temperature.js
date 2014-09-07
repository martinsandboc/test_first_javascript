function f2c (fahrenheit) {
  return ((fahrenheit - 32)*5/9);
}

function c2f (celcius) {
  return (celcius*9/5+32);
}

function Temperature (num) {
  this.fahrTemp;
  this.celcTemp; 
  if (num != undefined) {
    this.setFahrenheit(num); 
  }
}

Temperature.prototype = {
  setFahrenheit: function(temp) {
    this.fahrTemp = temp;
    this.celcTemp = f2c(temp);
  },
  fahrenheit: function() {
    return (this.fahrTemp);
  },
  setCelcius: function(temp) {
    this.celcTemp = temp;
    this.fahrTemp = c2f(temp);
  },
  celcius: function() {
    return this.celcTemp;
  }
};

