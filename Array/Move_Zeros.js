var moveZeroes = function (nums) {
  //const sortedNums = nums.sort((a,b) => a-b);
  const zeroList = nums.filter((num) => num === 0);
  const restList = nums.filter((num) => num !== 0);
  const final = restList.concat(zeroList);
  return final;
};

///////////////////////////////////////////////////

var moveZeroes = function (nums) {
  // compare to [+1] immediate neighbor
  // if neighb is nonzero than swap
  // i is placeholder in array, while j checks i's immediate neighbour(s)
  var i = 0,
    j = 0,
    currVal;
  while (i < nums.length) {
    if (nums[i] === 0 && j + 1 < nums.length) {
      j++;
      if (nums[j] !== 0) {
        // i takes value of neighbour val, and that neighbour val is zero
        // essentially we're just swapping
        nums[i] = nums[j];
        nums[j] = 0;
        i++;
        j = i;
      }
    } else {
      i++;
      j = i;
    }
  }
};
