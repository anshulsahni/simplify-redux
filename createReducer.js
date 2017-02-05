module.exports = function(initialState, handlers) {
  handlers = handlers || {};
  return function(state, action) {
    const handler = handlers[action.type];
    state = state || initialState;
    if (handler) {
      return handler(state, action);
    }
    return state;
  }
};
