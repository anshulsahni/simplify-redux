module.exports = function() {
  const constants = {};
  for (arg in arguments) {
    constants[arguments[arg]] = arguments[arg];
  }
  return constants;
};
