// this is the solution of famous youtube problem of Google, Google made vidoe about it here
// https://www.youtube.com/watch?v=XKu_SEDAykw&ab_channel=LifeatGoogle

// Has pair with sum?
// [1,2,3,9]  sum = 8 return => NO :(
// [1,2,4,4]  sum = 8 return => YES  :)

// Naive
function hasPairWithSum(arr, sum) {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (arr[i] + arr[j] === sum) {
        return true;
      }
    }
  }
  return false;
}

// Better Solution
function _hasPairWithSum(arr, sum) {
  const itemsSet = new Set();
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    if (itemsSet.has(arr[i])) {
      return true;
    }
    itemsSet.add(sum - arr[i]);
  }
  return false;
}
