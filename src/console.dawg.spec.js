'use strict';

// Utilities:
import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

// Test setup:
const expect = chai.expect;
chai.use(sinonChai);

// Under test:
import dawg from './console.dawg';

describe('console.dawg:', () => {
    it('should call console.log with "dawg"', () => {
        sinon.stub(console, 'log');

        dawg();

        expect(console.log).to.have.been.calledWith('dawg');

        console.log.restore();
    });
});
