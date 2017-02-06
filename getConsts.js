module.exports = function () {
  const constants = {};

  for (var arg = 0; arg < arguments.length; arg++) {
    constants[arguments[arg]] = arguments[arg];
  }

  return constants;
};
