function jumpingOnClouds(c) {
  let minJumps = 0;
  let start = c[0];
  let pointer = 0;
  for (let i = 0; i < c.length; i++) {
    if (start === c[pointer + 2]) {
      minJumps += 1;
      start = c[pointer + 2];
      pointer += 2;
    } else if (start === c[pointer + 1]) {
      minJumps += 1;
      start = c[pointer + 1];
      pointer += 1;
    }
  }
  return minJumps;
}
