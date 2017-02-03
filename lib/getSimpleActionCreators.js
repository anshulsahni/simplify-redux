const capitalize = function(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const getCamelCase = function(string) {
  return string.split('_').map(function(word, index) {
    return index > 0 ? capitalize(word.toLowerCase()) : word.toLowerCase();
  }).join('');
};

module.exports = function() {
  const methods = {};
  for(constant in arguments) {
    const _arguments = arguments;
    methods[getCamelCase(arguments[constant])] = function() {
      return {
        type: _arguments[constant]
      };
    }
  }
  return methods;
};
