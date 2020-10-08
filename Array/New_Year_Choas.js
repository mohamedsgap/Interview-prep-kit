// Complete the minimumBribes function below.
function minimumBribes(q) {
  let count = 0;
  for (let i = q.length - 1; i >= 0; i--) {
    if (q[i] - (i + 1) > 2) {
      console.log("Too chaotic");
      return;
    }
    let val = Math.max(0, q[i] - 2);
    for (let j = val; j < i; j++) {
      if (q[j] > q[i]) count++;
    }
  }
  console.log(count);
}

//////////////////////////////////////////////////////////////////////////////////////////////
////////////////// this is a legacy solution passes the 3 of the test cases only /////////////
///////////////////////////////////////////////////////////////////////////////////////////////

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
    } else {
      // insetion sort
      let key = bribeQueue[i];
      let j = i - 1;
      while (j >= 0 && bribeQueue[j] > key) {
        bribeQueue[j + 1] = bribeQueue[j];
        j = j - 1;
        count += 1;
      }
      bribeQueue[j + 1] = key;
    }
  }

  if (count > 0) {
    console.log(count);
  }
}
