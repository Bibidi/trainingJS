function iqTest(numbers) {
  numbers = stringToNumberArray(numbers);
  let oddCnt = 0;
  let oddPos = -1, evenPos = -1;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 1) {
      oddCnt++;
      oddPos = i + 1;
    }
    else evenPos = i + 1;
  }
  return oddCnt === 1 ? oddPos : evenPos;
}

function stringToNumberArray(numbers) {
  let res = [];
  let cur = '';
  let length = numbers.length;
  for (let i = 0; i < length; i++) {
    if (numbers[i] !== ' ') cur += numbers[i];
    if (numbers[i] === ' ' || i === length - 1) {
      res.push(parseInt(cur, 10));
      cur = '';
    }
  }
  return res;
}


// refactoring
function iqTest(numbers) {
  numbers = numbers.split(' ').map(str => parseInt(str));
  let oddCnt = 0;
  let oddPos = -1, evenPos = -1;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 1) {
      oddCnt++;
      oddPos = i + 1;
    }
    else evenPos = i + 1;
  }
  return oddCnt === 1 ? oddPos : evenPos;
}
