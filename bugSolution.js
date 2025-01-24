function foo(x) {
  if (x === null || x === undefined || typeof x !== 'string' && typeof x !== 'object') {
    return 0; // Handle null, undefined and other cases
  }
  if (typeof x.length === 'undefined') {
    return 0
  }
  return x.length; 
}