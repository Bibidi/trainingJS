const grabDoll = dolls => {
  const bag = [];
  for (const v of dolls) {
    switch (true) {
      case v === "Hello Kitty":
      case v === "Barbie doll":
        bag.push(v);
        break;
      default:
    }

    if (bag.length >= 3) break;
    else continue;
  }
  return bag;
}