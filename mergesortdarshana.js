function mergeSort(arr) {
    if (arr.length <= 1) return arr;
  
    // Split array into two halves
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
  
    // Merge the sorted halves
    return merge(left, right);
  }
  
  function merge(left, right) {
    const result = [];
    let i = 0, j = 0;
  
    // Compare elements from left and right arrays
    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        result.push(left[i]);
        i++;
      } else {
        result.push(right[j]);
        j++;
      }
    }
  
    // Concatenate remaining elements
    return result.concat(left.slice(i)).concat(right.slice(j));
  }
  
  // Example usage
  const array = [38, 27, 43, 3, 9, 82, 10];
  console.log("Sorted array:", mergeSort(array));
  