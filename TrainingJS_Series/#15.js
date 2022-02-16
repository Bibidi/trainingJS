const howManySmaller = (arr, n) => {
  let res = 0;
  for (let idx = 0; idx < arr.length; idx++) {
    arr[idx] = arr[idx].toFixed(2);
    if (arr[idx] < n) res++;
  }
  return res;
}

const howManySmaller = (arr, n) => arr.filter(v => v.toFixed(2) < n).length;