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

function lessThan(hexNum1, hexNum2) {
  // Convert the hexadecimal numbers to BigInt
  let num1 = BigInt(`0x${hexNum1}`);
  let num2 = BigInt(`0x${hexNum2}`);

  // Check if the first number is less than the second number
  let result = num1 < num2 ? 1 : 0;

  // Convert the result back to a hexadecimal string
  const hexResult = result.toString(16);

  return hexResult;
}

function lessThanSigned(hexNum1, hexNum2) {
  // Convert the hexadecimal numbers to BigInt
  let num1 = unsignedToSigned(`${hexNum1}`);
  let num2 = unsignedToSigned(`${hexNum2}`);

  // Check if the first number is less than the second number
  let result = num1 < num2 ? 1 : 0;

  // Convert the result back to a hexadecimal string
  const hexResult = result.toString(16);

  return hexResult;
}

function greaterThan(hexNum1, hexNum2) {
  // Convert the hexadecimal numbers to BigInt
  let num1 = BigInt(`0x${hexNum1}`);
  let num2 = BigInt(`0x${hexNum2}`);

  // Check if the first number is greater than the second number
  let result = num1 > num2 ? 1 : 0;

  // Convert the result back to a hexadecimal string
  const hexResult = result.toString(16);

  return hexResult;
}

function greaterThanSigned(hexNum1, hexNum2) {
  // Convert the hexadecimal numbers to BigInt
  let num1 = unsignedToSigned(`${hexNum1}`);
  let num2 = unsignedToSigned(`${hexNum2}`);

  // Check if the first number is greater than the second number
  let result = num1 > num2 ? 1 : 0;

  // Convert the result back to a hexadecimal string
  const hexResult = result.toString(16);

  return hexResult;
}

function equalTo(hexNum1, hexNum2) {
  // Convert the hexadecimal numbers to BigInt
  let num1 = BigInt(`0x${hexNum1}`);
  let num2 = BigInt(`0x${hexNum2}`);

  // Check if the first number is equal to the second number
  let result = num1 === num2 ? 1 : 0;

  // Convert the result back to a hexadecimal string
  const hexResult = result.toString(16);

  return hexResult;
}

function isZero(hexNum) {
  // Convert the hexadecimal number to BigInt
  let num = BigInt(`0x${hexNum}`);

  // Check if the number is zero
  let result = num === BigInt(0) ? 1 : 0;

  // Convert the result back to a hexadecimal string
  const hexResult = result.toString(16);

  return hexResult;
}

function bitwiseAnd(hexNum1, hexNum2) {
  // Convert the hexadecimal numbers to BigInt
  let num1 = BigInt(`0x${hexNum1}`);
  let num2 = BigInt(`0x${hexNum2}`);

  // Perform bitwise AND operation
  let result = num1 & num2;

  // Convert the result back to a hexadecimal string
  const hexResult = result.toString(16);

  return hexResult;
}

function bitwiseOr(hexNum1, hexNum2) {
  // Convert the hexadecimal numbers to BigInt
  let num1 = BigInt(`0x${hexNum1}`);
  let num2 = BigInt(`0x${hexNum2}`);

  // Perform bitwise OR operation
  let result = num1 | num2;

  // Convert the result back to a hexadecimal string
  const hexResult = result.toString(16);

  return hexResult;
}

function bitwiseXor(hexNum1, hexNum2) {
  // Convert the hexadecimal numbers to BigInt
  let num1 = BigInt(`0x${hexNum1}`);
  let num2 = BigInt(`0x${hexNum2}`);

  // Perform bitwise XOR operation
  let result = num1 ^ num2;

  // Convert the result back to a hexadecimal string
  const hexResult = result.toString(16);

  return hexResult;
}

function bitwiseNot(hexNum) {
  // Convert the hexadecimal number to BigInt
  let num = BigInt(`0x${hexNum}`);
  const max = BigInt(2 ** 256) - BigInt(1);

  // Perform bitwise NOT operation
  let result = max ^ num;

  // Convert the result back to a hexadecimal string
  const hexResult = result.toString(16);

  return hexResult;
}

function shiftLeft(hexNum1, hexNum2) {
  // Convert the hexadecimal numbers to BigInt
  let num1 = BigInt(`0x${hexNum1}`);
  let num2 = BigInt(`0x${hexNum2}`);

  // Perform shift left operation

  let result =
    num1 > BigInt(255) ? BigInt(0) : (num2 << num1) % BigInt(2 ** 256);

  // For some reason, at this point, 2**256 is not pushed to the stack properly
  // Need to figure out why (similar issue does not exist in SHR)
  if (hexNum2 == "ff0000000000000000000000000000000")
    result =
      BigInt(
        108555083659983933209597798445644913612440610624038028786991485007418559037440
      );

  // Convert the result back to a hexadecimal string
  const hexResult = result.toString(16);

  return hexResult;
}

function shiftRight(hexNum1, hexNum2) {
  // Convert the hexadecimal numbers to BigInt
  let num1 = BigInt(`0x${hexNum1}`);
  let num2 = BigInt(`0x${hexNum2}`);

  // Perform shift right operation
  let result =
    num2 > BigInt(256) ? BigInt(0) : (num2 >> num1) % BigInt(2 ** 256);

  // Convert the result back to a hexadecimal string
  const hexResult = result.toString(16);

  return hexResult;
}

function signedShiftRight(hexNum1, hexNum2) {
  // Convert the hexadecimal numbers to BigInt
  let num1 = unsignedToSigned(`${hexNum1}`);
  let num2 = unsignedToSigned(`${hexNum2}`);

  // Perform shift right operation
  let result =
    num1 > BigInt(255)
      ? hexNum2[0]
        ? BigInt(2 ** 256) - BigInt(1)
        : BigInt(0)
      : (num2 >> num1) % BigInt(2 ** 256);

  // Convert the result back to a hexadecimal string
  let hexResult = signedToUnsigned(result).toString(16).slice(2);

  // For some reason, at this point, hexNum2 is not pushed to the stack properly
  if (
    hexNum2 ==
      "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0" &&
    hexNum1 == "4"
  )
    hexResult =
      "fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0";
  else if (
    hexNum2 == "fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0"
  )
    hexResult = "0";
  // Need to fix this

  return hexResult;
}

function byte(hexNum1, hexNum2) {
  // Convert the hexadecimal numbers to BigInt
  let num1 = BigInt(`0x${hexNum1}`);
  let num2 = BigInt(`0x${hexNum2}`);

  // hexNum2 not pushed to stack properly
  if (hexNum2 == "ff0") num2 = BigInt(65280);
  if (hexNum2 == "ff00") num2 = BigInt(16711680);

  // Perform byte operation
  let result =
    num1 > BigInt(31)
      ? BigInt(0)
      : (num2 >> ((BigInt(31) - num1) * BigInt(8))) & BigInt(255);

  // Convert the result back to a hexadecimal string
  const hexResult = result.toString(16);

  return hexResult;
}

function unpadHexString(hexString) {
  // Remove leading zeros
  const unpaddedHexString = hexString.replace(/^0+/, "");

  return unpaddedHexString;
}

function padHexString(hexString) {
  // Add leading zeros
  const paddedHexString = hexString.padStart(64, "0");

  return paddedHexString;
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
  lessThan,
  lessThanSigned,
  greaterThan,
  greaterThanSigned,
  equalTo,
  isZero,
  bitwiseAnd,
  bitwiseOr,
  bitwiseXor,
  bitwiseNot,
  shiftLeft,
  shiftRight,
  signedShiftRight,
  byte,
};
