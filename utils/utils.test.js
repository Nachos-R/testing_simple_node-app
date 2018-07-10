const expect = require('expect');
const utils = require('./utils');

describe('Utils', () => {
    it('should add two number', () => {
        var res = utils.add(11, 22);
    
        expect(res).toBe(33).toBeA('number');
    });
    
    it('should square a number', () => {
        var res = utils.square(3);
    
        expect(res).toBe(9).toBeA('number');
    });
    
    it('should set firsName and lastName', () => {
        var user = {location: 'Lviv', age: 22};
        var res = utils.setName(user, 'Yura Rizhniv');
    
        expect(res).toEqual({
            location: 'Lviv',
            age: 22,
            firstName: 'Yura',
            lastName: 'Rizhniv'
        });
    });
    
    it('should async add two numbers', (done) => {
        utils.syncAdd(3, 4, (sum) => {
            expect(sum).toBe(7);
            done();
        });
    });
    
    it('should async square a number', (done) => {
        utils.syncSquare(3, (square) => {
            expect(square).toBe(9);
            done();
        });
    });
});