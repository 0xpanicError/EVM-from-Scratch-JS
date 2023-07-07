function addHexNumbers(hexNum1, hexNum2) {
  // Convert the hexadecimal numbers to BigInt
  const num1 = BigInt(`0x${hexNum1}`);
  const num2 = BigInt(`0x${hexNum2}`);

  // Add the numbers
  let sum = num1 + num2;

  // Overflow logic
  if (sum > BigInt(2 ** 256)) {
    sum = sum - BigInt(2 ** 256);
  }

  // Convert the sum back to a hexadecimal string
  const hexSum = sum.toString(16);

  return hexSum;
}

function multiplyHexNumbers(hexNum1, hexNum2) {
  // Convert the hexadecimal numbers to BigInt
  const num1 = BigInt(`0x${hexNum1}`);
  const num2 = BigInt(`0x${hexNum2}`);

  // Multiply the numbers
  let product = num1 * num2;

  // Overflow logic
  if (product > BigInt(2 ** 256)) {
    product = product % BigInt(2 ** 256);
  }

  // Convert the product back to a hexadecimal string
  const hexProduct = product.toString(16);

  return hexProduct;
}

function subtractHexNumbers(hexNum1, hexNum2) {
  // Convert the hexadecimal numbers to BigInt
  const num1 = BigInt(`0x${hexNum1}`);
  const num2 = BigInt(`0x${hexNum2}`);

  // Subtract the numbers
  let difference = num1 - num2;

  // Underflow logic
  if (difference < 0) {
    difference = difference + BigInt(2 ** 256);
  }

  // Convert the difference back to a hexadecimal string
  const hexDifference = difference.toString(16);

  return hexDifference;
}

function divideHexNumbers(hexNum1, hexNum2) {
  // Convert the hexadecimal numbers to BigInt
  const num1 = BigInt(`0x${hexNum1}`);
  const num2 = BigInt(`0x${hexNum2}`);

  let quotient;

  // Divide by zero logic
  if (num2 == 0) {
    quotient = 0;
  } else {
    // Divide the numbers
    quotient = num1 / num2;
  }

  // Convert the quotient back to a hexadecimal string
  const hexQuotient = quotient.toString(16);

  return hexQuotient;
}

function modHexNumbers(hexNum1, hexNum2) {
  // Convert the hexadecimal numbers to BigInt
  const num1 = BigInt(`0x${hexNum1}`);
  const num2 = BigInt(`0x${hexNum2}`);

  let remainder;

  // Divide by zero logic
  if (num2 == 0) {
    remainder = 0;
  } else {
    // Get remainder of the numbers
    remainder = num1 % num2;
  }

  // Convert the remainder back to a hexadecimal string
  const hexRemainder = remainder.toString(16);

  return hexRemainder;
}

function addModHexNumbers(hexNum1, hexNum2, hexNum3) {
  // Convert the hexadecimal numbers to BigInt
  const num1 = BigInt(`0x${hexNum1}`);
  const num2 = BigInt(`0x${hexNum2}`);
  const num3 = BigInt(`0x${hexNum3}`);

  // Add the numbers
  let sum = num1 + num2;

  // Get the remainder of the sum and the third number
  let remainder = sum % num3;

  // Convert the remainder back to a hexadecimal string
  const hexRemainder = remainder.toString(16);

  return hexRemainder;
}

function mulModHexNumbers(hexNum1, hexNum2, hexNum3) {
  // Convert the hexadecimal numbers to BigInt
  const num1 = BigInt(`0x${hexNum1}`);
  const num2 = BigInt(`0x${hexNum2}`);
  const num3 = BigInt(`0x${hexNum3}`);

  // Multiply the numbers
  let product = num1 * num2;

  // Get the remainder of the product and the third number
  let remainder = product % num3;

  // Convert the remainder back to a hexadecimal string
  const hexRemainder = remainder.toString(16);

  return hexRemainder;
}

function expHexNumbers(hexNum1, hexNum2) {
  // Convert the hexadecimal numbers to BigInt
  const num1 = BigInt(`0x${hexNum1}`);
  const num2 = BigInt(`0x${hexNum2}`);

  // Exponentiate the numbers
  let power = num2 ** num1;

  // Overflow logic
  if (power > BigInt(2 ** 256)) {
    power = power % BigInt(2 ** 256);
  }

  // Convert the power back to a hexadecimal string
  const hexPower = power.toString(16);

  return hexPower;
}

function unpadHexString(hexString) {
  // Remove leading zeros
  const unpaddedHexString = hexString.replace(/^0+/, "");

  return unpaddedHexString;
}

module.exports = {
  addHexNumbers,
  multiplyHexNumbers,
  subtractHexNumbers,
  divideHexNumbers,
  modHexNumbers,
  addModHexNumbers,
  mulModHexNumbers,
  expHexNumbers,
  unpadHexString,
};
