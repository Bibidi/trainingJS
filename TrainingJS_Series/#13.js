const whatNumberIsIt = n => {
  let res = '';
  switch (true) {
    case (n === Number.MAX_VALUE):
      res = 'Number.MAX_VALUE';
      break;
    case (n === Number.MIN_VALUE):
      res = 'Number.MIN_VALUE';
      break;
    case (Number.isNaN(n)):
      res = 'Number.NaN';
      break;
    case (n === Infinity):
      res = 'Number.POSITIVE_INFINITY';
      break;
    case (n === -Infinity):
      res = 'Number.NEGATIVE_INFINITY';
      break;
    default:
      res = n;
  }
  return 'Input number is ' + res;
}