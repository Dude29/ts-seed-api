import { describe, it } from 'mocha';
// mocha has no built in assertions so they must be included
import { expect } from 'chai';
import { add } from '../main';

describe('Add', () => {
	describe('#add()', () => {
		it('should sum the operands', () => {
			expect(add(5, 6)).to.equal(11);
			expect(add(7, 2)).to.equal(9);
			expect(add(46, -69)).to.equal(-23);
			expect(add(69, 351)).to.equal(420);
		});
	});
});
