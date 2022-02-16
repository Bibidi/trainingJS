const colorOf = (r, g, b) => {
  let red = r.toString(16).length === 1 ? '0' + r.toString(16) : r.toString(16);
  let green = g.toString(16).length === 1 ? '0' + g.toString(16) : g.toString(16);
  let blue = b.toString(16).length === 1 ? '0' + b.toString(16) : b.toString(16);
  return '#' + red + green + blue;
}

const colorOf = (r, g, b) => '#' + r.toString(16).padStart(2, '0') + g.toString(16).padStart(2, '0') + b.toString(16).padStart(2, '0');