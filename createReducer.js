module.exports = function (initialState, handlers) {
  var _handlers = handlers || {};
  return function (state, action) {
    const handler = _handlers[action.type];
    var _state = state || initialState;
    if (handler) {
      return handler(_state, action);
    }
    return _state;
  };
};
