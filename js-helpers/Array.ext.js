// Splits array into group of arrays with
// each group's length = to chunkSize
Array.prototype.chunkify = function(chunkSize) {
  let results = [];
  while (this.length) {
    results.push(this.splice(0, chunkSize));
  }
  return results;
}

// Removing elements from arrays.
// These are like superpowers for Array.splice()

Array.prototype.removeFirst = function(val) {
  let idx = this.indexOf(val);
  if (idx > -1) this.splice(idx, 1);
  return this;
}

Array.prototype.remove = function(val) {
  return this.filter( x => {
    return x !== val;
  });
}

// Accepts an array of elements to remove.
Array.prototype.removeMany = function(arr) {
  if (!Array.isArray(arr)) throw new TypeError('Array.removeMany() must be passed an array.');
  else {
    return this.filter( x => {
      return !arr.includes(x);
    });
  }
}

Array.prototype.random = function() {
	return this[Math.floor(Math.random() * this.length)];
}


Array.prototype.diff = function(a) {
	return this.filter(function (i) { return a.indexOf(i) < 0; });
};
