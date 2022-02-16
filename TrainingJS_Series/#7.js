const saleHotdogs = n => {
  switch (true) {
    case (n < 5): return 100 * n;
    case (n >= 5 && n < 10): return 95 * n;
    case (n >= 10): return 90 * n;
    default: return -1;
  }
}