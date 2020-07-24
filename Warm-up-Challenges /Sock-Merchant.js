// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
  let numOfMatchedPairs = 0;
  const uniqueList = [...new Set(ar)];

  for (let i of uniqueList) {
    let paris = ar.filter((a) => a === i);
    if (paris.length % 2 === 0) {
      numOfMatchedPairs += paris.length / 2;
    } else {
      numOfMatchedPairs += (paris.length - 1) / 2;
    }
  }
  return numOfMatchedPairs;
}
