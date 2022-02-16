const pickIt = arr => {
  let odd = [], even = [];
  for (const v of arr) {
    if (v % 2 === 1) odd.push(v);
    else even.push(v);
  }
  return [odd, even];
}