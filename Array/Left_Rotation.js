// Complete the rotLeft function below.
function rotLeft(a, d) {
  let original = a;
  let result = [];
  for (let i = 0; i < d; i++) {
    result.push(original.shift());
  }

  const finalResult = original.concat(result);
  return finalResult;
}
