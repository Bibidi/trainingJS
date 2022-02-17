const splitAndMerge = (string, separator) => {
  let strArr = string.split(' ');
  return strArr.map(word => {
    let nWord = word[0];
    for (let idx = 1; idx < word.length; idx++) {
      nWord += (separator + word[idx]);
      console.log(nWord);
    }
    return nWord;
  }).join(' ');
}

const splitAndMerge = (str, sp) => str.split(' ').map(v => v.split('').join(sp)).join(' ');