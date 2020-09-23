// Complete the minimumSwaps function below.
function minimumSwaps(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== i + 1) {
      arr[arr.lastIndexOf(i + 1)] = arr[i];
      count += 1;
    }
  }

  return count;
}
