function sumArray(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    // Handle invalid input or empty array
    return null;
  }
  let sum = 0;
  for (const num of arr) {
    sum += num;
  }
  return sum;
}
