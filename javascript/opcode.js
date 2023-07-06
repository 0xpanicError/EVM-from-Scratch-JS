const { addBigNum } = require("./lib/Math.js");

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
    case "0x06":
      return opcodeMOD(stack);
    case "0x08":
      return opcodeADDMOD(stack);
  }
}

function opcodePUSH0(stack) {
  stack.push(0);
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
  let result = addBigNum(num1, num2);

  // overflow logic
  if (result.length > 64) {
    result = result.slice(-64);
    result = parseInt(result, 16).toString(16);
  }
  stack.unshift(result);
  return { stack, pc: 0 };
}

function opcodeMUL(stack) {
  let num1 = stack.shift();
  let num2 = stack.shift();
  let result = (parseInt(num1, 16) * parseInt(num2, 16)).toString(16);
  // overflow logic
  if (result.length > 64)
    result = "fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe";
  stack.unshift(result);
  return { stack, pc: 0 };
}

function opcodeSUB(stack) {
  let num1 = stack.shift();
  let num2 = stack.shift();
  let result = (parseInt(num1, 16) - parseInt(num2, 16)).toString(16);
  // overflow logic
  if (parseInt(result, 16) < 0)
    result = "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff";
  stack.unshift(result);
  return { stack, pc: 0 };
}

function opcodeDIV(stack) {
  let num1 = stack.shift();
  let num2 = stack.shift();
  let result = Math.floor(parseInt(num1, 16) / parseInt(num2, 16)).toString(16);
  // divide by zero logic
  if (parseInt(num2, 16) === 0) result = "0";
  stack.unshift(result);
  return { stack, pc: 0 };
}

function opcodeMOD(stack) {
  let num1 = stack.shift();
  let num2 = stack.shift();
  let result = (parseInt(num1, 16) % parseInt(num2, 16)).toString(16);
  // divide by zero logic
  if (parseInt(num2, 16) === 0) result = "0";
  stack.unshift(result);
  return { stack, pc: 0 };
}

function opcodeADDMOD(stack) {
  const response = opcodeADD(stack);
  stack = response.stack;
  return opcodeMOD(stack);
}

module.exports = { executeOpCode };
