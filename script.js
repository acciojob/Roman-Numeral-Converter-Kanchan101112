function convertToRoman(num) {
  const obj = {
    M: 1000,
    CM: 900, 
    D: 500,
    CD: 400, 
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9, 
    V: 5,
    IV: 4, 
    I: 1
  };

  const keys = Object.keys(obj).sort((a, b) => obj[b] - obj[a]);

  let result = '';

  for (let key of keys) {
    while (num >= obj[key]) {
      result += key;
      num -= obj[key];
    }
  }

  return result;
}

console.log(convertToRoman(14)); // Output: XIV
console.log(convertToRoman(798)); // Output: DCCXCVIII

// do not edit below this line
module.exports = convertToRoman
