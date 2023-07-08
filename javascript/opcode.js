const {
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
} = require("./lib/Math.js");

function executeOpCode(opcode, stack, args) {
  opcode = opcode.toString(16);
  opcode = opcode.length === 1 ? "0x0" + opcode : "0x" + opcode;
  switch (opcode) {
    case "0x5f":
      return opcodePUSH0(stack);
    case "0x60":
      return opcodePUSH(opcode, stack, args);
    case "0x61":
      return opcodePUSH(opcode, stack, args);
    case "0x62":
      return opcodePUSH(opcode, stack, args);
    case "0x63":
      return opcodePUSH(opcode, stack, args);
    case "0x64":
      return opcodePUSH(opcode, stack, args);
    case "0x65":
      return opcodePUSH(opcode, stack, args);
    case "0x66":
      return opcodePUSH(opcode, stack, args);
    case "0x67":
      return opcodePUSH(opcode, stack, args);
    case "0x68":
      return opcodePUSH(opcode, stack, args);
    case "0x69":
      return opcodePUSH(opcode, stack, args);
    case "0x6a":
      return opcodePUSH(opcode, stack, args);
    case "0x6b":
      return opcodePUSH(opcode, stack, args);
    case "0x6c":
      return opcodePUSH(opcode, stack, args);
    case "0x6d":
      return opcodePUSH(opcode, stack, args);
    case "0x6e":
      return opcodePUSH(opcode, stack, args);
    case "0x6f":
      return opcodePUSH(opcode, stack, args);
    case "0x70":
      return opcodePUSH(opcode, stack, args);
    case "0x71":
      return opcodePUSH(opcode, stack, args);
    case "0x72":
      return opcodePUSH(opcode, stack, args);
    case "0x73":
      return opcodePUSH(opcode, stack, args);
    case "0x74":
      return opcodePUSH(opcode, stack, args);
    case "0x75":
      return opcodePUSH(opcode, stack, args);
    case "0x76":
      return opcodePUSH(opcode, stack, args);
    case "0x77":
      return opcodePUSH(opcode, stack, args);
    case "0x78":
      return opcodePUSH(opcode, stack, args);
    case "0x79":
      return opcodePUSH(opcode, stack, args);
    case "0x7a":
      return opcodePUSH(opcode, stack, args);
    case "0x7b":
      return opcodePUSH(opcode, stack, args);
    case "0x7c":
      return opcodePUSH(opcode, stack, args);
    case "0x7d":
      return opcodePUSH(opcode, stack, args);
    case "0x7e":
      return opcodePUSH(opcode, stack, args);
    case "0x7f":
      return opcodePUSH(opcode, stack, args);
    case "0x50":
      return opcodePOP(stack);
    case "0x01":
      return opcodeADD(stack);
    case "0x02":
      return opcodeMUL(stack);
    case "0x03":
      return opcodeSUB(stack);
    case "0x04":
      return opcodeDIV(stack);
    case "0x05":
      return opcodeSDIV(stack);
    case "0x06":
      return opcodeMOD(stack);
    case "0x07":
      return opcodeSMOD(stack);
    case "0x08":
      return opcodeADDMOD(stack);
    case "0x09":
      return opcodeMULMOD(stack);
    case "0x0a":
      return opcodeEXP(stack);
    case "0x0b":
      return opcodeSIGNEXTEND(stack);
    case "0x10":
      return opcodeLT(stack);
    case "0x11":
      return opcodeGT(stack);
    case "0x12":
      return opcodeSLT(stack);
    case "0x13":
      return opcodeSGT(stack);
    case "0x14":
      return opcodeEQ(stack);
    case "0x15":
      return opcodeISZERO(stack);
    case "0x16":
      return opcodeAND(stack);
    case "0x17":
      return opcodeOR(stack);
    case "0x18":
      return opcodeXOR(stack);
    case "0x19":
      return opcodeNOT(stack);
    case "0x1a":
      return opcodeBYTE(stack);
    case "0x1b":
      return opcodeSHL(stack);
    case "0x1c":
      return opcodeSHR(stack);
    case "0x1d":
      return opcodeSAR(stack);
  }
}

function opcodePUSH0(stack) {
  stack.unshift(0);
  return { stack, pc: 0 };
}

function opcodePUSH(opcode, stack, args) {
  inputSize = Number(opcode) - 95;
  args = args.slice(0, inputSize);
  let value = "";
  for (let arg of args) {
    arg = arg.toString(16);
    value += arg;
    // console.log(value);
  }
  stack.unshift(value);
  return { stack, pc: args.length };
}

function opcodePOP(stack) {
  stack.shift();
  return { stack, pc: 0 };
}

function opcodeADD(stack) {
  let num1 = stack.shift();
  let num2 = stack.shift();
  let result = addHexNumbers(num1, num2);

  stack.unshift(result);
  return { stack, pc: 0 };
}

function opcodeMUL(stack) {
  let num1 = stack.shift();
  let num2 = stack.shift();
  let result = multiplyHexNumbers(num1, num2);

  stack.unshift(result);
  return { stack, pc: 0 };
}

function opcodeSUB(stack) {
  let num1 = stack.shift();
  let num2 = stack.shift();
  let result = subtractHexNumbers(num1, num2);
  stack.unshift(result);
  return { stack, pc: 0 };
}

function opcodeDIV(stack) {
  let num1 = stack.shift();
  let num2 = stack.shift();
  let result = divideHexNumbers(num1, num2);
  stack.unshift(result);
  return { stack, pc: 0 };
}

function opcodeSDIV(stack) {
  let num1 = stack.shift();
  let num2 = stack.shift();
  let result = sdivHexNumbers(num1, num2);
  stack.unshift(result);
  return { stack, pc: 0 };
}

function opcodeMOD(stack) {
  let num1 = stack.shift();
  let num2 = stack.shift();
  let result = modHexNumbers(num1, num2);
  stack.unshift(result);
  return { stack, pc: 0 };
}

function opcodeSMOD(stack) {
  let num1 = stack.shift();
  let num2 = stack.shift();
  let result = smodHexNumbers(num1, num2);
  stack.unshift(result);
  return { stack, pc: 0 };
}

function opcodeADDMOD(stack) {
  let num1 = stack.shift();
  let num2 = stack.shift();
  let num3 = stack.shift();
  let result = addModHexNumbers(num1, num2, num3);
  stack.unshift(result);
  return { stack, pc: 0 };
}

function opcodeMULMOD(stack) {
  let num1 = stack.shift();
  let num2 = stack.shift();
  let num3 = stack.shift();
  let result = mulModHexNumbers(num1, num2, num3);
  stack.unshift(result);
  return { stack, pc: 0 };
}

function opcodeEXP(stack) {
  let pow = stack.shift();
  let base = stack.shift();
  let result = expHexNumbers(base, pow);
  stack.unshift(result);
  return { stack, pc: 0 };
}

function opcodeSIGNEXTEND(stack) {
  let num1 = stack.shift();
  let num2 = stack.shift();
  let result = signExtend(num1, num2);
  stack.unshift(result);
  return { stack, pc: 0 };
}

function opcodeLT(stack) {
  let num1 = stack.shift();
  let num2 = stack.shift();
  let result = lessThan(num1, num2);
  stack.unshift(result);
  return { stack, pc: 0 };
}

function opcodeGT(stack) {
  let num1 = stack.shift();
  let num2 = stack.shift();
  let result = greaterThan(num1, num2);
  stack.unshift(result);
  return { stack, pc: 0 };
}

function opcodeSLT(stack) {
  let num1 = stack.shift();
  let num2 = stack.shift();
  let result = lessThanSigned(num1, num2);
  stack.unshift(result);
  return { stack, pc: 0 };
}

function opcodeSGT(stack) {
  let num1 = stack.shift();
  let num2 = stack.shift();
  let result = greaterThanSigned(num1, num2);
  stack.unshift(result);
  return { stack, pc: 0 };
}

function opcodeEQ(stack) {
  let num1 = stack.shift();
  let num2 = stack.shift();
  let result = equalTo(num1, num2);
  stack.unshift(result);
  return { stack, pc: 0 };
}

function opcodeISZERO(stack) {
  let num1 = stack.shift();
  let result = isZero(num1);
  stack.unshift(result);
  return { stack, pc: 0 };
}

function opcodeAND(stack) {
  let num1 = stack.shift();
  let num2 = stack.shift();
  let result = bitwiseAnd(num1, num2);
  stack.unshift(result);
  return { stack, pc: 0 };
}

function opcodeOR(stack) {
  let num1 = stack.shift();
  let num2 = stack.shift();
  let result = bitwiseOr(num1, num2);
  stack.unshift(result);
  return { stack, pc: 0 };
}

function opcodeXOR(stack) {
  let num1 = stack.shift();
  let num2 = stack.shift();
  let result = bitwiseXor(num1, num2);
  stack.unshift(result);
  return { stack, pc: 0 };
}

function opcodeNOT(stack) {
  let num1 = stack.shift();
  let result = bitwiseNot(num1);
  stack.unshift(result);
  return { stack, pc: 0 };
}

function opcodeSHL(stack) {
  let num1 = stack.shift();
  let num2 = stack.shift();
  let result = shiftLeft(num1, num2);
  stack.unshift(result);
  return { stack, pc: 0 };
}

function opcodeSHR(stack) {
  let num1 = stack.shift();
  let num2 = stack.shift();
  let result = shiftRight(num1, num2);
  stack.unshift(result);
  return { stack, pc: 0 };
}

function opcodeSAR(stack) {
  let num1 = stack.shift();
  let num2 = stack.shift();
  let result = signedShiftRight(num1, num2);
  stack.unshift(result);
  return { stack, pc: 0 };
}

function opcodeBYTE(stack) {
  let num1 = stack.shift();
  let num2 = stack.shift();
  let result = byte(num1, num2);
  stack.unshift(result);
  return { stack, pc: 0 };
}

module.exports = { executeOpCode };
