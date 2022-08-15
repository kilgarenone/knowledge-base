var trap = function (height) {
  let leftMax = 0;
  let rightMax = 0;
  let result = 0;
  let left = 0;
  let right = height.length - 1;

  while (left <= right) {
    leftMax = Math.max(leftMax, height[left]);
    rightMax = Math.max(rightMax, height[right]);

    if (height[left] < height[right]) {
      result += leftMax - height[left++];
    } else {
      result += rightMax - height[right--];
    }
  }
  return result;
};
