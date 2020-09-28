
exports.min = function min (array) {
    
  return (array === undefined || array.length == 0) ? 0 : array.reduce((s, e)=> s = e<s ? e : s);
}

exports.max = function max (array) {
  return (array === undefined || array.length == 0) ? 0 : array.reduce((s, e)=> s = e>s ? e : s);
}

exports.avg = function avg (array) {
  return (array === undefined || array.length == 0) ? 0 : array.reduce((s, e)=> s += e) / array.length;
}
