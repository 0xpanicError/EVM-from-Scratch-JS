function addBigNum(x, y) {
  const num1 = x.lengt > y.length ? x : y;
  let num2 = x.lengt > y.length ? y : x;
  const ML = Math.max(x.length, y.length);
  const diff = Math.abs(x.length - y.length);
  let zeroString = "";
  for (let i = 0; i < diff; i++) {
    zeroString += "0";
  }
  num2 = zeroString + num2;
  let carry = 0;
  let result = "";
  for (let i = ML - 1; i >= 0; i--) {
    const val1 = parseInt(num1[i], 16);
    const val2 = parseInt(num2[i], 16);
    const ans = ((val1 + val2 + carry) % 16).toString(16);
    carry = Math.floor((val1 + val2 + carry) / 16);
    result = ans + result;
  }
  if (carry) result = "1" + result;
  return result;
}

// function multiplyBigNum(x, y) {
//   let num1 = x.length > y.length ? x : y;
//   let num2 = x.length > y.length ? y : x;
//   let subMul = [];
//   let zeroCount = 0;
//   for (let i = num2.length - 1; i >= 0; i--) {
//     let carry = 0;
//     let result = "";
//     for (let j = num1.length - 1; j >= 0; j--) {
//       const val1 = parseInt(num1[j], 16);
//       const val2 = parseInt(num2[i], 16);
//       const ans = ((val1 * val2 + carry) % 16).toString(16);
//       carry = Math.floor((val1 * val2 + carry) / 16);
//       result = ans + result;
//     }
//     let zeroString = "";
//     for (let j = 0; j < zeroCount; i++) {
//       zeroString += "0";
//     }
//     result = result + zeroString;
//     zeroCount++;
//     if (carry) result = carry.toString(16) + result;
//     subMul.push(result);
//   }
//   let finalResult = subMul[0];
//   for (let i = 1; i < subMul.length; i++) {
//     finalResult = addBigNum(finalResult, subMul[i]);
//   }
//   return finalResult;
// }

// console.log(multiplyBigNum("0x1ac25", "0x182ff"));

module.exports = { addBigNum };
