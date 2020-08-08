// Complete the hourglassSum function below.
function hourglassSum(arr) {
  let sum = 0;
  let total = [];
  //arr = xeex[i][j]
  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = 0; j < arr.length - 2; j++) {
      sum +=
        arr[i][j] +
        arr[i][j + 1] +
        arr[i][j + 2] +
        arr[i + 1][j + 1] +
        arr[i + 2][j] +
        arr[i + 2][j + 1] +
        arr[i + 2][j + 2];
      total.push(sum);
      sum = 0;
    }
  }

  const max = Math.max(...total);
  return max;
}
