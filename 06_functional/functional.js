function countWords (string) {
	words = string.split(" ");
	return words.length;
}

function makeAdder(adder) {
  return function(num) { return num + adder}
}

function forEach (array, action) {
  for (i=0; i<array.length; i++) {
    action(array[i]); 
  }
}

function map (array, action) {
  var updatedArray = [];
  for (i=0; i<array.length; i++) {
      updatedArray[i] = action(array[i]); 
  }
  return updatedArray;
}

function filter (array, action) {
  var updatedArray = [];
  for (i=0; i<array.length; i++) {
    if (action(array[i])) {
      updatedArray.push(array[i]);
    }
  }
  return updatedArray;
}

function contains (collection, parameter) {
  if (Array.isArray(collection)) {
    for (i=0; i<collection.length; i++) {
      if (collection[i] == parameter) {
        return true; 
      }
    }
  } else {
    for (var key in collection) {
      if(collection[key] == parameter) {
        return true;
      }
    }
  }
  return false;
}

function reduce (array, start, action) {
  var result = 0;
  for ( i=start; i < array.length; i ++) {
    result = action(result, array[i]);
  }
  return result;
}

function countWordsInReduce (num, string){
  var array = string.split(" ");
  num += array.length;
  return num;
}

function sum (array) {
  var add = function(a, b) {
    return a+b;
  };
  return (reduce(array, 0, add));
}

function every(array, action) {
  if (array.length ==0) {
    return true;
  }
  for (i=0; i < array.length; i++) {
    if (!action(array[i])){
      return false;
    }
  }
  return true;
}

function any (array, action) {
  if (array.length ==0){
    return false;
  }
  for (i=0; i < array.length; i++){
    if (action == undefined) {
      if (array[i]) {
        return true;
      }
    } else
    if (action(array[i])) {
      return true;
    }
  }
  return false;
}

function once (fn){
  var calledOnce = false;
  return function () {
    if (!calledOnce) {
      fn();
      calledOnce = true;
    }
  }
}

function wrapper (fn, wrapFn) {
  return function () {
    return wrapFn(fn);
  }
}