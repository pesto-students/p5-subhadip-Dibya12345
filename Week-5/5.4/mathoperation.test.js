const mathOPeration = require('./mathoperation');
describe('Math Operations', () => {
    it('adds 1 + 2 to equal 3', () => {
        expect(mathOPeration.sum(1, 2)).toBe(3);
    });
    it('subtracts 2 - 1 to equal 1', () => {
        expect(mathOPeration.diff(2, 1)).toBe(1);
    }); 
    it('multiplies 2 * 2 to equal 4', () => {
        expect(mathOPeration.product(2, 2)).toBe(4);
    });
});

