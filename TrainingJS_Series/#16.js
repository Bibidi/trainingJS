const cutIt = arr => {
  let len = Infinity;
  for (const v of arr) {
    len = Math.min(len, v.length);
  }
  return arr.map(v => v.substring(0, len));
}

const cutIt = arr => {
  const shortest = Math.min(...arr.map(v => v.length));
  return arr.map(v => v.slice(0, shortest));
}