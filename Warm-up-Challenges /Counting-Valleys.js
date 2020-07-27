// Complete the countingValleys function below.
function countingValleys(n, s) {
  const steps = s.split("");
  let seaLevel = 0;
  let count = 0;
  for (let i of s) {
    if (i === "D") {
      seaLevel -= 1;
    } else {
      seaLevel += 1;
    }
    if ((i === "U") & (seaLevel === 0)) {
      count += 1;
    }
  }
  return count;
}
