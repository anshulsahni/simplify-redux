var assert = require('assert');

var createReducer = require('../createReducer');

describe('createReducer', function() {

  describe('With no arguments', function() {

    it('should return function', function() {
      const result = createReducer({}, {});
      assert.strictEqual('function', typeof result);
    });

    it('should return state in its original form', function() {
      const state = { valueOfA: 1 };
      const action = { type: 'SET_A' };
      const result = createReducer({}, {});
      assert.deepStrictEqual(state, result(state, action));
    });
  });

  describe('With arguments', function() {
    const setValueA = function(state, action) {
      return Object.assign(state, {
        valueOfA: action.valueOfA,
      })
    }

    const setValueB = function(state, action) {
      return Object.assign(state, {
        valueOfB: action.valueOfB,
      });
    }

    const initialState = {
      valueOfA: 1,
      valueOfB: 2,
    };

    const handlers = {
      SET_VALUE_A: setValueA,
      SET_VALUE_B: setValueB,
    };

    const reducer = createReducer(initialState, handlers);

    it('should return stated with update value of A', function() {
      const sampleState = initialState;
      const newState = reducer(sampleState, {
        type: 'SET_VALUE_A',
        valueOfA: 3,
      });
      assert.equal(3, newState.valueOfA);
      assert.deepStrictEqual({ valueOfA: 3, valueOfB: 2 }, newState);
    });

  });
});
