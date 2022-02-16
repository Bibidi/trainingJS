const padIt = (str, n) => {
  let left = '', right = '';
  while (n > 0) {
    if (n % 2 === 1) left += '*';
    else right += '*';
    n--;
  }
  return left + str + right;
}