var assert = require('assert');

var actionCreators = require('../getSimpleActionCreators.js');
var getConsts = require('../getConsts');

describe('getSimpleActionCreators', function() {

  describe('Empty Arguments', function() {

    it('should return empty object', function() {
      assert.deepStrictEqual({}, actionCreators());
    });

  });

  describe('With String Arugments', function() {

    describe('Checking the return value of getSimpleActionCreators', function() {
      it('should return object with one method', function() {
        const result = actionCreators('EXAMPLE_CONSTANT');
        assert.strictEqual('function', typeof result.exampleConstant);
      });

      it('should return object with two methods', function() {
        const result = actionCreators('EXAMPLE_CONSTANT_ONE', 'EXAMPLE_CONSTANT_TWO');
        assert.strictEqual('function', typeof result.exampleConstantOne);
        assert.strictEqual('function', typeof result.exampleConstantOne);
      });
    });

    describe('Checking return value of methods constructed through action creator', function() {
      it('should return method returning object with type property of value same string', function() {
        const results = actionCreators('SET_NETWORK_BUSY').setNetworkBusy();
        assert.deepStrictEqual({ type: 'SET_NETWORK_BUSY' }, results);
      });
    });

  });

  describe('With arguments from result of getConsts', function() {
    var result;

    beforeEach(function() {
      const constants = getConsts('SET_NETWORK_BUSY', 'SET_NETWORK_FREE');
      result = actionCreators(
        constants.SET_NETWORK_BUSY,
        constants.SET_NETWORK_FREE
      );
    });

    it('should return object with one method', function() {
      assert.strictEqual('function', typeof result.setNetworkBusy);
    });

    it('should return method returning object with type property with value of same string', function() {
      assert.deepStrictEqual({ type: 'SET_NETWORK_FREE' }, result.setNetworkBusy());
    });
  });

});
