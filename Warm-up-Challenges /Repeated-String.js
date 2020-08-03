// Complete the repeatedString function below.
function repeatedString(s, n) {
  let fracNumber = Math.trunc(n / s.length);
  let reminder = n % s.length;
  let counter = 0;

  for (let index = 0; index < s.length; index++) {
    if (s[index] === "a") {
      counter++;
    }
  }
  counter = counter * fracNumber;
  for (let index = 0; index < reminder; index++) {
    if (s[index] === "a") {
      counter++;
    }
  }
  return counter;
}

// legacy code doesn't pass the total number of test cases and I don't know why!!
function repeatedString(s, n) {
  let repeated = [];
  let letters = s.split("");
  let count = 0;
  let p = 0;
  if ((s.length === 1) & (s === "a")) {
    return n;
  } else if ((s.length === 1) & (s !== "a")) {
    return 0;
  } else {
    for (let i = 0; i < n; i++) {
      if (n > letters.length) {
        if (p < letters.length) {
          repeated.push(letters[p]);
        } else if (p >= letters.length) {
          p = 0;
          repeated.push(letters[p]);
        }
        p += 1;
      }
    }
    for (let i of repeated) {
      if (i === "a") {
        count += 1;
      }
    }
    return count;
  }
}
