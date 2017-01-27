'use strict';

// Utilities:
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _sinon = require('sinon');

var _sinon2 = _interopRequireDefault(_sinon);

var _sinonChai = require('sinon-chai');

var _sinonChai2 = _interopRequireDefault(_sinonChai);

// Test setup:

// Under test:
var _consoleDawg = require('./console.dawg');

var _consoleDawg2 = _interopRequireDefault(_consoleDawg);

var expect = _chai2['default'].expect;
_chai2['default'].use(_sinonChai2['default']);

describe('console.dawg:', function () {
    it('should call console.log with "dawg"', function () {
        _sinon2['default'].stub(console, 'log');

        (0, _consoleDawg2['default'])();

        expect(console.log).to.have.been.calledWith('yo, dawg');

        console.log.restore();
    });
});