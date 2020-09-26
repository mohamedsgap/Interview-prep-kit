// Complete the minimumBribes function below.
function minimumBribes(q) {
  let count = null;
  const bribeQueue = q;
  const orderedQueue = [...q].sort();
  ///console.log(orderedQueue)
  for (let i = 0; i < bribeQueue.length; i++) {
    let correctPosition = orderedQueue.indexOf(bribeQueue[i]);
    let currentPosition = bribeQueue.indexOf(bribeQueue[i]);
    if (correctPosition - currentPosition > 2) {
      console.log("Too chaotic");
      count = 0;
      break;
    } else if (bribeQueue[i] !== i + 1) {
      bribeQueue[bribeQueue.lastIndexOf(i + 1)] = bribeQueue[i];
      count += 1;
    }
  }

  if (count > 0) {
    console.log(count);
  }
}
