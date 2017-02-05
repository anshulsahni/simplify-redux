var assert = require('assert');

var getConsts = require('../getConsts.js');

describe('getConsts', function() {

  describe('With no arugments', function() {

    it('should return empty object', function() {
      assert.deepStrictEqual({}, getConsts());
    });

  });

  describe('With strings given as arguments', function() {

    it('should return object with two properties for single argument', function() {
      const results = getConsts('CONSTANT_ONE');
      assert.deepStrictEqual({ CONSTANT_ONE: 'CONSTANT_ONE' },results);
    });

    it('should return object with two properties for two arguments', function() {
      const results = getConsts('CONSTANT_ONE', 'CONSTANT_TWO');
      assert.deepStrictEqual({
        CONSTANT_ONE: 'CONSTANT_ONE',
        CONSTANT_TWO: 'CONSTANT_TWO',
      },results);
    });

    it('should return objects with three properties for three arguments', function() {
      const results = getConsts('CONSTANT_ONE', 'CONSTANT_TWO', 'CONSTANT_THREE');
      assert.deepStrictEqual({
        CONSTANT_ONE: 'CONSTANT_ONE',
        CONSTANT_TWO: 'CONSTANT_TWO',
        CONSTANT_THREE: 'CONSTANT_THREE',
      }, results);
    });

  });
});
