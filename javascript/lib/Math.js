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

function sdivHexNumbers(hexNum1, hexNum2) {
  // Convert the hexadecimal numbers to BigInt
  let num1 = unsignedToSigned(`${hexNum1}`);
  let num2 = unsignedToSigned(`${hexNum2}`);

  let quotient;

  // Divide by zero logic
  if (num2 == BigInt(0)) {
    quotient = BigInt(0);
  }
  // Divide the numbers
  else {
    quotient = num1 / num2;
  }

  // Convert the quotient back to a hexadecimal string
  const hexQuotient = signedToUnsigned(quotient).toString(16).slice(2);

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

function smodHexNumbers(hexNum1, hexNum2) {
  // Convert the hexadecimal numbers to BigInt
  let num1 = unsignedToSigned(`${hexNum1}`);
  let num2 = unsignedToSigned(`${hexNum2}`);

  let remainder;

  // Divide by zero logic
  if (num2 == 0) {
    remainder = BigInt(0);
  }
  // Get remainder of the numbers
  else {
    remainder = num1 % num2;
  }

  // Convert the quotient back to a hexadecimal string
  const hexRemainder = signedToUnsigned(remainder).toString(16).slice(2);

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

function signExtend(hexNum1, hexNum2) {
  // Convert the hexadecimal numbers to BigInt
  const num1 = BigInt(`0x${hexNum1}`);
  const num2 = BigInt(`0x${hexNum2}`);

  // performe bitwise AND operation
  let bits =
    num2 & ((BigInt(1) << ((num1 + BigInt(1)) * BigInt(8))) - BigInt(1));

  // if the most significant bit is 1, then pad the bits with 1s
  if (bits >> ((num1 + BigInt(1)) * BigInt(8) - BigInt(1)) !== BigInt(0)) {
    let mask =
      (BigInt(2 ** 256) - BigInt(1)) ^
      ((BigInt(1) << ((num1 + BigInt(1)) * BigInt(8))) - BigInt(1));
    bits = bits | mask;
  }

  // Convert the bits back to a hexadecimal string
  const hexBits = bits.toString(16);

  return hexBits;
}

function unpadHexString(hexString) {
  // Remove leading zeros
  const unpaddedHexString = hexString.replace(/^0+/, "");

  return unpaddedHexString;
}

function unsignedToSigned(hexString) {
  // Convert the hexadecimal number to BigInt
  let num = BigInt(`0x${hexString}`);

  // Check if the most significant bit is 1
  if (num >> BigInt(255) !== BigInt(0)) {
    // If it is, then convertto an unsigned number
    num = (num & (BigInt(2 ** 256) - BigInt(1))) - BigInt(2 ** 256);
  } else {
    num = (BigInt(2 ** 256) - BigInt(1)) & num;
  }

  return num;
}

function signedToUnsigned(num) {
  // Check if the number is negative
  if (num < 0) {
    num = num + BigInt(2 ** 256);
  } else {
    num = num & (BigInt(2 ** 256) - BigInt(1));
  }

  // Convert the signed number back to a hexadecimal string
  const hexSignedNum = `0x${num.toString(16)}`;

  return hexSignedNum;
}

module.exports = {
  addHexNumbers,
  multiplyHexNumbers,
  subtractHexNumbers,
  divideHexNumbers,
  sdivHexNumbers,
  modHexNumbers,
  smodHexNumbers,
  addModHexNumbers,
  mulModHexNumbers,
  expHexNumbers,
  signExtend,
  unpadHexString,
};
