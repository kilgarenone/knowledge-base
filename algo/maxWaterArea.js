/**
 * @param {number[]} height
 * @return {number}
 */
function maxWaterArea(height) {
  let waterArea = 0;
  let start = 0;
  let end = height.length - 1;

  while (start < end) {
    waterArea = Math.max(
      waterArea,
      Math.min(height[start], height[end]) * (end - start)
    );

    if (height[start] < height[end]) {
      start++;
    } else {
      end--;
    }
  }

  return waterArea;
}

/**
 * This is working towards the middle while
 * computing area bounded by the 'shorter' height(i.e Math.min(height[start], height[end])),
 * which will be eliminated in the next loop(i.e start++ or end--)
 */
