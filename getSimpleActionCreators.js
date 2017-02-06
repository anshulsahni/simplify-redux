const capitalize = function (string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const getCamelCase = function (string) {
  return string.split('_').map(function (word, index) {
    return index > 0 ? capitalize(word.toLowerCase()) : word.toLowerCase();
  }).join('');
};

const getAction = function (constant) {
  return function () {
    return {
      type: constant
    };
  };
};

module.exports = function () {
  const methods = {};
  for (var constant = 0; constant < arguments.length; constant++) {
    methods[getCamelCase(arguments[constant])] = getAction(arguments[constant]);
  }
  return methods;
};
