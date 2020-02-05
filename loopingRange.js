var range = function(start, end, step) {
  var array = [];
  if (start > end || step <= 0) {
    return [];
  } 
  for (var i = start; step > 1 || step === undefined ? i <= end : i >= end; step ? i = i + step : i++) {
    array.push(i); 
  }
  return array;
};

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
